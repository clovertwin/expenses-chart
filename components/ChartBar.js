import { useState } from "react";

import styles from "./ChartBar.module.css";

export default function ChartBar({ label, maxAmount, value }) {
  const [isHovering, setIsHovering] = useState(false);

  const barFillHeight = Math.round((value / maxAmount) * 100) + "%";

  const fillStyle = {
    blue: "hsl(186, 34%, 60%)",
    red: "hsl(10, 79%, 65%)",
  };

  const fillStyleHover = {
    hoverBlue: "hsl(186, 33%, 76%)",
    hoverRed: "hsl(10, 61%, 79%)",
  };

  const maxStyle = maxAmount === value ? fillStyle.blue : fillStyle.red;
  const maxStyleHover =
    maxAmount === value ? fillStyleHover.hoverBlue : fillStyleHover.hoverRed;

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const popOver = (
    <div className={styles.popover}>
      <p>{"$" + value}</p>
    </div>
  );

  return (
    <div className={styles.chartBar}>
      <div className={styles.chartBarInner}>
        {isHovering ? popOver : null}
        <div
          style={{
            width: "100%",
            borderRadius: "5px",
            height: barFillHeight,
            backgroundColor: isHovering ? maxStyleHover : maxStyle,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></div>
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
