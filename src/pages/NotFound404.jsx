import { Link } from "react-router-dom";
import styles from "./NotFound404.module.css";

export const NotFound404 = () => {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h2 className={`text text_type_digits-large ${styles.title}`}>404</h2>
        <p className={`text text_type_digits-large ${styles.subtitle}`}>
          PAGE NOT FOUND
        </p>
        <Link to="/" className={`text text_type_digits-large ${styles.link}`}>
        back to HomePage{" "}
        </Link>
      </div>
    </div>
  );
};
