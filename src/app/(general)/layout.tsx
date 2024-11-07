import styles from "./(styles)/general.module.css";
import { Navbar } from "@/../components";
export default function  GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <Navbar/>
     <main className={styles.main}>
     
     
      {
        children
      }
      </main>
    </>
   
  );
}