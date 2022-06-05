import Header from "./Header";
import Chart from "./Chart";
const dayData = require("../data/data.json");

import styles from "./App.module.css";

export default function ChartWrapper() {
  return (
    <div className={styles.container}>
      <Header total="$921.48" />
      <Chart data={dayData} />
    </div>
  );
}
