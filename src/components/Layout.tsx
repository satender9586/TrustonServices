import Footer from "./Footer";
import Navbaar from "./Navbaar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbaar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
