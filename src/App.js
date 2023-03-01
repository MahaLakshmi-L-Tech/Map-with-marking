import React from "react";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact={true} />
          <Route path="/loginUser" element={<Login />} exact={true} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
