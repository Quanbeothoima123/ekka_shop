import styles from "./TopBar.module.css";
import {
  IconFacebook,
  IconTwitter,
  IconInstagram,
  IconLinkedIn,
} from "../icons/Icons";

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <a className={styles.socialBtn} href="#" aria-label="Facebook">
          <IconFacebook className={styles.icon} />
        </a>
        <a className={styles.socialBtn} href="#" aria-label="Twitter">
          <IconTwitter className={styles.icon} />
        </a>
        <a className={styles.socialBtn} href="#" aria-label="Instagram">
          <IconInstagram className={styles.icon} />
        </a>
        <a className={styles.socialBtn} href="#" aria-label="LinkedIn">
          <IconLinkedIn className={styles.icon} />
        </a>
      </div>

      <div className={styles.center}>
        FREE SHIPPING THIS WEEK ORDER OVER - $75
      </div>

      <div className={styles.right}>
        <button className={styles.dropdownBtn} type="button">
          CURRENCY <span className={styles.caret} />
        </button>
        <button className={styles.dropdownBtn} type="button">
          LANGUAGE <span className={styles.caret} />
        </button>
      </div>
    </div>
  );
}
