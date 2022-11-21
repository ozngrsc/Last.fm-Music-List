import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "light" : "dark"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
