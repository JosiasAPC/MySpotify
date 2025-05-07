import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter, Router, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
