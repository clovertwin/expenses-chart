import styles from "./Card.module.css";

export default function Card({ children, color }) {
  const CardBackgroundColor = {
    backgroundColor: color,
  };

  return (
    <div style={CardBackgroundColor} className={styles.card}>
      {children}
    </div>
  );
}
