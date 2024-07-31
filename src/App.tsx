import { useState } from "react";

import Inputs from "./components/Inputs";

const App = () => {
  // const [sentence, setSentence] = useState("");
  //
  const [red, setRed] = useState<number>(0);
  const [green, setGreen] = useState<number>(0);
  const [blue, setBlue] = useState<number>(0);
  const [alpha, setAlpha] = useState<number>(1);

  const colors = [
    {
      name: "Red",
      color: red,
      set: setRed,
    },
    {
      name: "Green",
      color: green,
      set: setGreen,
    },
    {
      name: "Blue",
      color: blue,
      set: setBlue,
    },
    {
      name: "Alpha",
      color: alpha,
      set: setAlpha,
    },
  ];

  return (
    <>
      {/* colors={colors} */}
      <Inputs />
    </>
  );
};

export default App;
