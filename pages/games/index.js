import Head from "next/head"
// import Script from "next/script"
import Link from "next/link"

import styles from "../../styles/Home.module.css"
import { Navbar } from "../../src"


export default function Games() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Games</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar></Navbar>
            
            
            <main>
                <h1 className={styles.title}>
                    GAMES
                </h1>
                <Link href="/games/dino">dino</Link>
            </main>


        <style jsx global>{`
            html,
            body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
            }
            * {
            box-sizing: border-box;
            }
        `}</style>
        </div>
    )
}