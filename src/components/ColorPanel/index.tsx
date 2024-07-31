import styles from "./styles.module.css";

type colorType = {
  red: number;
  green: number;
  blue: number;
  alpha: number;
};

const ColorPanel = ({ red, green, blue, alpha }: colorType) => {
  return (
    <div
      data-cy="color-panel"
      className={styles.colorPanel}
      style={{
        backgroundColor: `rgba(${red},${green},${blue},${alpha})`,
      }}
    ></div>
  );
};

export default ColorPanel;
