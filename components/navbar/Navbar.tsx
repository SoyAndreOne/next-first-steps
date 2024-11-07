import Link from "next/link";
import styles from "./navbar.module.css";
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems =[
    {path:"/about", text: "About"},
    {path:"/pricing", text: "Pricing"},
    {path:"/contact", text: "Contact"}
]
export const Navbar =  () => {
    console.log("navbar creadp");
    
  return (
    <nav className={styles.navBar}>
        <Link href={"/"} className={styles.twoContainer}> 
        <HomeIcon />
        <span>Home</span>
        </Link>
        <div className={styles.oneContainer}> </div>
        {
            navItems.map( navItems =>(
                <ActiveLink key={navItems.path} { ...navItems }></ActiveLink>
            ))
        }
        
    </nav>
  )
}
