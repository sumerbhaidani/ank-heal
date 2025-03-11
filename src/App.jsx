import { useState } from "react";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage/HomePage.jsx";
import Header from "./components/Header/Header.jsx";
import Tips from "./pages/Tips/Tips.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element=<HomePage /> />
          <Route path="/tips" element=<Tips /> />
          <Route path="/questionnaire" element />
          <Route path="/:id/evaluations" element />
          <Route path="/login" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
