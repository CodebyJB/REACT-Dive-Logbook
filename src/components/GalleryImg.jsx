import styles from './GalleryImg.module.css'

function GalleryImg({image}) {
    const {img, title} = image;

    return (
        <li className={styles.hex}>
      <div className={styles.hexIn}>
        <div className={styles.hexLink} >
          <div className={styles.img}><img src={img} alt={title}  /></div>
          <h1 id="demo1">{title}</h1>
        </div>
      </div>
    </li>
    )
}

export default GalleryImg
