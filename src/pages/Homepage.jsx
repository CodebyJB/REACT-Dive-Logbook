import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

function Homepage() {
  return (
    <div className={styles.homepage}>
      <PageNav />
      <div className={styles.section1}>
        <h1>
          Explore the Depths <br />
          <span>Underwater Memories</span>
          <br />
          Captures Your Diving Adventures
        </h1>
      </div>
      <div className={styles.section2}>
        <h2>
          An interactive map to log your underwater escapades in every dive spot
          imaginable. <br />
          Never lose the memories of your incredible dives and share your
          underwater adventures with your fellow divers.
        </h2>
        <Link to="/logbook" className="cta">
          Start tracking now
        </Link>
      </div>
    </div>
  );
}

export default Homepage;
