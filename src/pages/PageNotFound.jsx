import PageNav from "../components/PageNav";

import styles from './PageNotFound.module.css'

function PageNotFound() {
  return (
    <div className={styles.pageNotFound}>
      <PageNav />
      404 Page not found
    </div>
  );
}

export default PageNotFound;
