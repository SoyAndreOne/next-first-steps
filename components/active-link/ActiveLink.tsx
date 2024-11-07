
'use client';
import Link from "next/link";
import styles from "./activeLink.module.css";
import { usePathname } from "next/navigation";
interface Props {
    path:string;
    text:string;
}


export const ActiveLink = ({path, text}:Props) => {

    const pathName = usePathname();


  return (
   
    <Link key={path} className = {`${styles.link}  ${(pathName == path )&& styles['active-link']}`} href={path}>{text}</Link>

  )
}
