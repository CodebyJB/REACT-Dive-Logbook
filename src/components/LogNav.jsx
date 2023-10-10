import { NavLink } from "react-router-dom";

import styles from "./LogNav.module.css";

function LogNav() {
  return (
    <div className={styles.lognav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default LogNav;
