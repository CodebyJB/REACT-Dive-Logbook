import GalleryImg from "./GalleryImg";
import images from "../../data/images.json";

import styles from "./GalleryList.module.css";

function GalleryList() {
  return (
    <ul className={styles.galleryList}>
      {images.map((image) => (
        <GalleryImg image={image} key={image.title} />
      ))}
    </ul>
  );
}

export default GalleryList;
