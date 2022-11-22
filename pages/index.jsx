import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout/layout";
import styles from "../styles/pages/HomePage.module.css";

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section>
        <h1 className={styles.title}>Welcome to Project Community!</h1>

        <div className={styles.grid}>
          <Link href={"/create"} className={styles.card}>
            <h2>&larr; Create a Game</h2>
            <p>Decide a name, choose your categories and add your players!</p>
          </Link>

          <Link href={"/join"} className={styles.card}>
            <h2>Join a Game &rarr;</h2>
            <p>Have a game code? Use it to jump right in for some fun!</p>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
