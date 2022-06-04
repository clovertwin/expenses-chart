import Card from "./Card";
import ChartBar from "./ChartBar";

import styles from "./Chart.module.css";

export default function Chart({ data }) {
  const maxAmount = Math.max(...data.map((item) => item.amount));
  const totalAmount =
    "$" +
    data
      .map((item) => item.amount)
      .reduce((acc, cur) => acc + cur)
      .toFixed(2);

  return (
    <Card color="hsl(33, 100%, 98%)">
      <div className={styles.balanceWrapper}>
        <h2 className={styles.header}>Spending - Last 7 Days</h2>
        <div className={styles.chart}>
          {data.map((item) => (
            <ChartBar
              key={item.day}
              label={item.day}
              maxAmount={maxAmount}
              value={item.amount}
            />
          ))}
        </div>
        <hr className={styles.line} />
        <div className={styles.chartFooter}>
          <div className={styles.monthTotal}>
            <p className={styles.monthTotalLabel}>Total this month</p>
            <h2 className={styles.footerAmount}>{totalAmount}</h2>
          </div>
          <div className={styles.percentIncrease}>
            <p className={styles.percent}>+ 2.4%</p>
            <p className={styles.fromLast}>from last month</p>
          </div>
        </div>
      </div>
    </Card>
  );
}
