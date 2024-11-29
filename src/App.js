import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import SecondPage from "./components/SecondPage";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<SecondPage />} />
      </Routes>
    </div>
  );
}

export default App;
