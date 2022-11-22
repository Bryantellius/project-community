import Link from "next/link";
import styles from "./layout.module.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <span>Project Community</span>
        <nav>
          <ul className="flex justify-center items-space-between">
            <li className={styles.navItem}>
              <Link href={"/"}>Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href={"/create"}>Create</Link>
            </li>
            <li className={styles.navItem}>
              <Link href={"/join"}>Join</Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Bryantellius"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Bryant
        </a>
      </footer>
    </div>
  );
}
