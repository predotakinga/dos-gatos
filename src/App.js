import Home from "./pages";
import Info from "./components/Info";
import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalFonts from "./fonts/fonts";

function App() {
  return (
    <Router>
      <GlobalFonts />
      <Home />
    </Router>
  );
}

export default App;
