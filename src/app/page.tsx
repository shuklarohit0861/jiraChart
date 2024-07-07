'use client'
import styles from "./page.module.css";
import { useState } from "react";
import Bar from "./bar";
import data from "../../data"

export default function Home() {
  const [showChart, setShowChart] = useState(false);


  return (
    <main className={styles.main}>
      <button className={styles.button} type="submit" onClick={()=> setShowChart(prev => !prev)}>
        Toggle button
      </button>

      {showChart && <Bar data={data}/>}

    </main>
  );
}
