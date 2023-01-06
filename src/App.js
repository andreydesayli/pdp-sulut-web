import React from "react";
import { Route, Routes } from  "react-router-dom"
import { Beranda } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Beranda/>} />
    </Routes>
  );
}

export default App;
