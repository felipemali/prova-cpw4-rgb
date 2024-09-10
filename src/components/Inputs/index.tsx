import { useState } from "react";
import ColorPanel from "../ColorPanel";
import styles from "./styles.module.css";

const Inputs = () => {
  const [redState, setRedState] = useState<number>(0);
  const [greenState, setGreenState] = useState<number>(0);
  const [blueState, setBlueState] = useState<number>(0);
  const [alphaState, setAlphaState] = useState<number>(1);

  //prova-felipeee

  const colors = [
    {
      value: redState,
      name: "Red",
      set: setRedState,
    },
    {
      value: greenState,
      name: "Green",
      set: setGreenState,
    },
    {
      value: blueState,
      name: "Blue",
      set: setBlueState,
    },
    {
      value: alphaState,
      name: "Alpha",
      set: setAlphaState,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.controlPanel}>
        {colors.map(({ name, set, value }, index) => (
          <label key={index}>
            {name}: {value}
            <input
              data-cy={`input-${index}`}
              type="range"
              min="0"
              step={name === "Alpha" ? "0.1" : "1"}
              max={name === "Alpha" ? "1" : "255"}
              value={value}
              onChange={(e) => {
                const value = Number(e.target.value);
                set(value);
              }}
            />
          </label>
        ))}
      </div>
      <ColorPanel
        red={redState}
        green={greenState}
        blue={blueState}
        alpha={alphaState}
      />
    </div>
  );
};
export default Inputs;
