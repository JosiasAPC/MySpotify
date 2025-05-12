import { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Song from "./pages/Song";
import Songs from "./pages/Songs";
import Artist from "./pages/Artist";
import Artists from "./pages/Artists";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Artists" element={<Artists />} />
        <Route path="/Artist/:id" element={<Artist />} />
        <Route path="/Songs" element={<Songs />} />
        <Route path="/Song/:id" element={<Song />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
