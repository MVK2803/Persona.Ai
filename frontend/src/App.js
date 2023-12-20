import React, { useState } from "react";
import axios from "axios";
import MainPage from "./Layouts/MainPage";
import LandingPage from "./Layouts/LandingPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/persona" element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
