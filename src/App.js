import GlobalStyles from "./styles";
import Routes from "./routes";
import React, { useEffect } from "react";
import EasterEgg from "./common/easter-egg";

function App() {
  useEffect(() => {
    EasterEgg();
  }, []);
  return (
    <>
      <GlobalStyles />
      <Routes />
    </>
  );
}

export default App;
