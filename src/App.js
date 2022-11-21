import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import TopArtists from "./components/TopArtistsList/TopArtists";
import ArtistDetail from "./components/ArtistDetail/ArtistDetail";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Router>
      <div className={darkMode ? "light" : "dark"}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="list">
          <Routes>
            <Route path="/" element={<TopArtists darkMode={darkMode} />} />
            <Route
              path="/detail/:name"
              element={<ArtistDetail darkMode={darkMode} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
