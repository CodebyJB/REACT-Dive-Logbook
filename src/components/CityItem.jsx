import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";
import { formatDate } from "../utils/formatDate";

import styles from "./CityItem.module.css";

function CityItem({ city }) {
  const { deleteCity } = useCities();
  const { cityName, emoji, date, id, position } = city;

  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <li className={styles.cityItem}>
      <Link to={`${id}?lat=${position.lat}&lng=${position.lng}`}>
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.delete} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
