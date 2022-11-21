import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import TopArtists from "./components/TopArtistsList/TopArtists";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "light" : "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <TopArtists />
    </div>
  );
}

export default App;
