type TitleProps = {
  emoji: string;
  title: string;
};

const Title = async ({ emoji, title }: TitleProps) => {
  return (
    <span className="flex justify-center items-center gap-4">
      {emoji}
      <span className="font-black text-4xl">{title}</span>
      {emoji}
    </span>
  );
};

export default Title;
