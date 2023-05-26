import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Navbar } from '../src';
import { Footer } from "../src"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>next</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header>
          <Navbar />
          <h1 className={styles.title}>
            NEXTJS PRACTICE
          </h1>
        </header>

        <Link href="#popularGames" className='btn btn-primary'>Get Started</Link>

        <div className={styles.body}>
          <div className={styles.grid} id="popularGames">
            <a href="./games" className={styles.card}>
              <h3>Dino &rarr;</h3>
              <p>JavaScript remake of the chrome dino game</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h3>Kirby &rarr;</h3>
              <p>(WORK IN PROGRESS)</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className={styles.card}
            >
              <h3>Dog &rarr;</h3>
              <p>(WORK IN PROGRESS)</p>
            </a>
          </div>
        </div>
        <footer>
            <Footer></Footer>
        </footer>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

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
