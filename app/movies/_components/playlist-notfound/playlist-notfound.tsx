"use client";

import { useState, useEffect } from "react";
import Title from "app/movies/_common/title/title";
import ButtonLinks from "app/movies/_common/button-links/button-links";

const PlaylistNotfound = () => {
  const [isReady, setIsReady] = useState(false);
  const [beenHere, setBeenHere] = useState<string>("");
  const [sikeAudio, setSikeAudio] = useState<HTMLAudioElement>();

  useEffect(() => {
    if (localStorage) {
      setBeenHere(localStorage.getItem("check-movies") as string);
    }

    setSikeAudio(new Audio("/audios/sike.mp3") as never);
  }, []);

  return (
    <div className="h-[calc(100vh-120px)] flex flex-col justify-center items-center gap-8">
      <div className="w-4/5 font-bold text-2xl flex flex-col text-center">
        {beenHere === "" ? (
          <div className="">Wait for a moment...</div>
        ) : beenHere === "true" ? (
          <div className="flex flex-col items-center gap-8">
            <Title emoji="✅" title="Welcome Back" />
            <p className="font-bold text-2xl text-center">
              You&apos;ve already been here, so you know how things go!
              <br />
              Go ahead and check your playlists!
            </p>
            <ButtonLinks />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-8">
            {!isReady ? (
              <>
                <p>
                  <Title emoji="❌" title="Attention" />
                  <br />
                  <span className="leading-10">
                    There were tons of movies on the homepage. What are you
                    doing here?
                    <br />
                    I told you that there are only 2 playlists here. <br />
                    For the last time, I&apos;ve placed 2 buttons down below
                    specially for you to go to your playlists! <br />
                    Focus up, because there&apos;s a slight chance that those
                    buttons will get removed from here! <br />
                    Click on the button below to see them.
                  </span>
                </p>
                <button
                  className="btn btn-accent w-min whitespace-nowrap"
                  onClick={() => {
                    setIsReady(true);

                    localStorage.setItem("check-movies", "true");

                    if (sikeAudio) {
                      sikeAudio.play();
                    }
                  }}
                >
                  Are You Ready?
                </button>
              </>
            ) : (
              <>
                <p>
                  <Title emoji="😂" title="SIKEEEEEEEEEEEEEE" />
                  <br />
                  <span className="leading-10">
                    Come on man. You belived me? I was just messing with you! 😂
                    <br />
                    Feel free to come here, and I promise you, I won&apos;t mess
                    with you again! Maybe.😅
                  </span>
                </p>
                <ButtonLinks />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PlaylistNotfound;
