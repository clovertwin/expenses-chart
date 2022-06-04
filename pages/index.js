import Head from "next/head";
import Header from "../components/Header";
import Chart from "../components/Chart";
const dayData = require("../data/data.json");

import styles from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Expenses Chart</title>
        <meta name="description" content="Expenses Chart by Shaun Carr" />
        <link rel="icon" href="favicon-32x32.png" />
      </Head>
      <Header total="$921.48" />
      <Chart data={dayData} />
    </div>
  );
}
