"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./TopBar.module.css";
import {
  IconFacebook,
  IconTwitter,
  IconInstagram,
  IconLinkedIn,
} from "../icons/Icons";

export default function TopBar() {
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD $");
  const [selectedLanguage, setSelectedLanguage] = useState("ENGLISH");

  const currencyRef = useRef(null);
  const languageRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (currencyRef.current && !currencyRef.current.contains(event.target)) {
        setCurrencyOpen(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setLanguageOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currencies = ["USD $", "EUR €"];
  const languages = ["ENGLISH", "ITALIANO"];

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
        {/* Currency Dropdown */}
        <div className={styles.dropdown} ref={currencyRef}>
          <button
            className={styles.dropdownBtn}
            type="button"
            onClick={() => {
              setCurrencyOpen(!currencyOpen);
              setLanguageOpen(false);
            }}
          >
            CURRENCY{" "}
            <span
              className={`${styles.caret} ${currencyOpen ? styles.caretUp : ""}`}
            />
          </button>
          <div
            className={`${styles.dropdownMenu} ${currencyOpen ? styles.open : ""}`}
          >
            {currencies.map((currency) => (
              <button
                key={currency}
                className={`${styles.dropdownItem} ${selectedCurrency === currency ? styles.active : ""}`}
                onClick={() => {
                  setSelectedCurrency(currency);
                  setCurrencyOpen(false);
                }}
              >
                {currency}
              </button>
            ))}
          </div>
        </div>

        {/* Language Dropdown */}
        <div className={styles.dropdown} ref={languageRef}>
          <button
            className={styles.dropdownBtn}
            type="button"
            onClick={() => {
              setLanguageOpen(!languageOpen);
              setCurrencyOpen(false);
            }}
          >
            LANGUAGE{" "}
            <span
              className={`${styles.caret} ${languageOpen ? styles.caretUp : ""}`}
            />
          </button>
          <div
            className={`${styles.dropdownMenu} ${languageOpen ? styles.open : ""}`}
          >
            {languages.map((language) => (
              <button
                key={language}
                className={`${styles.dropdownItem} ${selectedLanguage === language ? styles.active : ""}`}
                onClick={() => {
                  setSelectedLanguage(language);
                  setLanguageOpen(false);
                }}
              >
                {language}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
