import { NavLink } from "react-router-dom";

import styles from "./PageNav.module.css";

import Logo from "./Logo";

function PageNav() {
  return (
    <div className={styles.pageNav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/gallery">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/logbook">Logbook</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default PageNav;
