import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {DataDrivenOperatingHours} from '../app/components/operating-hours'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <DataDrivenOperatingHours/>
      </main>
    </div>
  )
}
