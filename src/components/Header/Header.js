import styles from "./Header.module.css";
import TopBar from "./TopBar";
import MainBar from "./MainBar";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <TopBar />
        <MainBar />
        <NavBar />
      </div>
    </header>
  );
}
