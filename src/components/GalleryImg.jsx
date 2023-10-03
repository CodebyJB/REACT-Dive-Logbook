import styles from "./GalleryImg.module.css";

function GalleryImg({ image }) {
  const { img, title } = image;

  return (
    <li className={styles.hexagon}>
      <img src={img} alt={title} />
      <p>{title}</p>
    </li>
  );
}

export default GalleryImg;
