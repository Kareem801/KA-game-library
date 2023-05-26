import styles from "../styles/Home.module.css"
import Head from "next/head"
import Link from "next/link"
import { Footer } from "../src"

export default function() {
    return(
        <div className={styles.container}>
            <Head>
                <title>next</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
              <header>
                <nav>
                    <ul className={styles.navbar}>
                        <li><Link href="../">Home</Link></li>
                        <li><Link href="/games">Games</Link></li>
                        <li><Link href="/signUp">Sign Up</Link></li>
                    </ul>
                </nav>

                <h1 className={styles.title}>
                    SIGN UP
                </h1>
              </header>
                
                <form>
                  <div className="form-group">
                    
                    <label for="exampleInputEmail1">Email address</label>
                    <div className="input-group mb-3">
                      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp email-addon" placeholder="Enter email" />
                      <div className="input-group-append">
                        <span className="input-group-text" id="email-addon">@example.com</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label for="inputFirstName">First Name</label>
                    <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                  </div>
                  
                  <br></br>
                  <div className="form-group">
                    <label for="inputSecondName">Second Name</label>
                    <input type="text" className="form-control" id="secondName" placeholder="Second Name" />
                  </div>
                  
                  <br></br>
                  <div className="form-group">
                    <label for="inputPassword">Password</label>
                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                  </div>
                  
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="offerCheck" />
                    <label className="form-check-label" for="offerCheck">I want to recieve updates and offers.</label>
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>

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