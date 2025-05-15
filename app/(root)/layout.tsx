import Navbar from "@/components/Navbar";
import { JSX } from "react";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
