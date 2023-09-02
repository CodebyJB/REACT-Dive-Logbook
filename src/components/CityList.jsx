import CityItem from "./CityItem";
import styles from "./CityList.module.css";

function CityList({ cities, isLoading }) {
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={Date.now()} />
      ))}
    </ul>
  );
}

export default CityList;
