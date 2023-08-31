import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import LogNav from "./LogNav";
import Logo from "./Logo";

function Sidebar() {
  return (
    <div>
      <Logo />
      Sidebar
      <LogNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Sidebar;
