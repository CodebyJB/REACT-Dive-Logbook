import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import LogNav from "./LogNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <LogNav />
      <Outlet />
      <div className={styles.footer}>
      <Footer /></div>
    </div>
  );
}

export default Sidebar;
