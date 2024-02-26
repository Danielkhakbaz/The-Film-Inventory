const Footer = async () => {
  return (
    <footer className="footer bg-neutral text-neutral-content justify-center rounded-t-xl p-4">
      <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
    </footer>
  );
};

export default Footer;
