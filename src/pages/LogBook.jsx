import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import styles from "./LogBook.module.css";

function LogBook() {
  return (
    <div className={styles.logBook}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default LogBook;
