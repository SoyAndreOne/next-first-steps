
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
    <span className={styles.spanMainFirst}>HOME PAGE</span>
    <Link href={"/about"}>About Page</Link>
   </main>
  );
}
