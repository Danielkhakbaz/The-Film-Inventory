import { ReactNode } from "react";
import Navbar from "layout/navbar/navbar";
import Footer from "layout/footer/footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout = async ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
