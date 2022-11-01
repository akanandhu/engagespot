import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
       <h1 className=' text-red-900'>Hello World</h1>
      </Head>

      <main className={styles.main}>
     
      </main>

      <footer className={styles.footer}>
      
      </footer>
    </div>
  )
}
