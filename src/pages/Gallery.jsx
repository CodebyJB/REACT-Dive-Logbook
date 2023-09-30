import Footer from "../components/Footer";
import PageNav from "../components/PageNav";
import GalleryList from "../components/GalleryList";

import styles from "./Gallery.module.css";

function Gallery() {
  return ( <div className={styles.gallery}>
         <PageNav />
         <GalleryList/>
         <Footer />
       </div>)
  
}

export default Gallery;
