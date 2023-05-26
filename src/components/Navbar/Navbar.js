import React from "react";
import styles from "../../../styles/Home.module.css"
import Link from "next/link";

function Navbar(){
    return(
        <nav>
            <ul className={styles.navbar}>
                <li><Link href="/home">Home</Link></li>
                <li><Link href="/games">Games</Link></li>
                <li><Link href="/signUp">Sign Up</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;