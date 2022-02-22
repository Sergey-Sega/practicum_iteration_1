import React from "react";

import NavBar from "./components/NavBar/Navbar";
import { Routes } from "./routes/mainroutes";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes/>
    </div>
  );
}

export default App;
