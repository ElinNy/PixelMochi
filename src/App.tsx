import React from "react";
import { Routes, Route } from "react-router-dom";
import New from "./pages/new/New";
import Navigation from "./components/navigation/navigation";
import "./assets/App.css";

const App: React.FC = () => (
  <>
    <h1>Pixel Mochi</h1>
    <Routes>
      <Route path="/" element={<Navigation />} />
      <Route path="/new" element={<New />} />
    </Routes>
  </>
);

export default App;
