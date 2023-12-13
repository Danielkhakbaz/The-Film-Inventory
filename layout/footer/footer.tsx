const Footer = async () => {
  return (
    <footer className="footer justify-center p-4 bg-neutral text-neutral-content rounded-t-xl">
      <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
    </footer>
  );
};

export default Footer;
