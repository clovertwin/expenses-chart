import Image from "next/image";
import Card from "./Card";

import styles from "./Header.module.css";

export default function Header(props) {
  return (
    <Card color="hsl(10, 79%, 65%)">
      <div className={styles.balanceWrapper}>
        <div className={styles.totalWrapper}>
          <p className={styles.balanceHeader}>My Balance</p>
          <h2>{props.total}</h2>
        </div>
        <Image
          src="/images/logo.svg"
          height={60}
          width={60}
          alt="company logo"
        />
      </div>
    </Card>
  );
}
