import { Link } from "react-router-dom";

import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <img src="../../public/img/Logo.png" alt="Logo"></img>
      </Link>
    </div>
  );
}

export default Logo;
