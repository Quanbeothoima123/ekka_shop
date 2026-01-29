import styles from "./Footer.module.css";
import {
  IconFacebook,
  IconTwitter,
  IconInstagram,
  IconLinkedIn,
} from "../icons/Icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* TOP */}
        <div className={styles.top}>
          {/* COL 1 */}
          <div className={styles.colContact}>
            <div className={styles.brandRow}>
              <img
                className={styles.brandLogo}
                src="/assets/img/logo.png"
                alt="Ekka"
                width={120}
                height={36}
              />
            </div>

            <p className={styles.addr}>
              71 Pilgrim Avenue Chevy Chase,
              <br />
              east california.
            </p>

            <div className={styles.kv}>
              <span className={styles.kvLabel}>Call Us:</span>{" "}
              <a className={styles.kvValue} href="tel:+440123456789">
                +44 0123 456 789
              </a>
            </div>
            <div className={styles.kv}>
              <span className={styles.kvLabel}>Email:</span>{" "}
              <a className={styles.kvValue} href="mailto:example@ec-email.com">
                +example@ec-email.com
              </a>
            </div>
          </div>

          {/* COL 2 */}
          <div className={styles.colLinks}>
            <h4 className={styles.colTitle}>Information</h4>
            <ul className={styles.links}>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Delivery Information</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>

          {/* COL 3 */}
          <div className={styles.colLinks}>
            <h4 className={styles.colTitle}>Account</h4>
            <ul className={styles.links}>
              <li>
                <a href="#">My Account</a>
              </li>
              <li>
                <a href="#">Order History</a>
              </li>
              <li>
                <a href="#">Wish List</a>
              </li>
              <li>
                <a href="#">Specials</a>
              </li>
            </ul>
          </div>

          {/* COL 4 */}
          <div className={styles.colLinks}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.links}>
              <li>
                <a href="#">Discount Returns</a>
              </li>
              <li>
                <a href="#">Policy &amp; policy</a>
              </li>
              <li>
                <a href="#">Customer Service</a>
              </li>
              <li>
                <a href="#">Term &amp; condition</a>
              </li>
            </ul>
          </div>

          {/* COL 5 */}
          <div className={styles.colNews}>
            <h4 className={styles.colTitle}>Newsletter</h4>
            <p className={styles.newsText}>
              Get instant updates about our new products
              <br />
              and special promos!
            </p>

            <form className={styles.newsForm} action="#" method="post">
              <input
                className={styles.newsInput}
                type="email"
                name="email"
                placeholder="Enter your email here..."
                aria-label="Email"
              />
              <button
                className={styles.newsBtn}
                type="submit"
                aria-label="Send"
              >
                {/* icon paper-plane */}
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M21.7 2.6 2.9 10.3c-.9.4-.9 1.7.1 2l6.7 2.3 2.4 6.8c.3 1 1.6 1 2 0l7.6-18.8c.3-.8-.6-1.5-1.4-1zM10.5 13.8l7.3-7.3-8.8 6.3 1.5 1z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM */}
        <div className={styles.bottom}>
          <div className={styles.social}>
            <a className={styles.socBtn} href="#" aria-label="Facebook">
              <IconFacebook className={styles.socIcon} />
            </a>
            <a className={styles.socBtn} href="#" aria-label="Twitter">
              <IconTwitter className={styles.socIcon} />
            </a>
            <a className={styles.socBtn} href="#" aria-label="Instagram">
              <IconInstagram className={styles.socIcon} />
            </a>
            <a className={styles.socBtn} href="#" aria-label="LinkedIn">
              <IconLinkedIn className={styles.socIcon} />
            </a>
          </div>

          <div className={styles.copy}>
            Copyright © 2026{" "}
            <a className={styles.copyLink} href="#">
              EKKA
            </a>
            . All Rights Reserved
          </div>

          <div className={styles.payments}>
            <img
              src="/assets/img/payment.png"
              alt="Payment methods"
              className={styles.payImg}
              width={360}
              height={48}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
