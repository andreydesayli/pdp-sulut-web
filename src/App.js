import React from "react";
import { Route, Routes } from  "react-router-dom"
import { Beranda, CompanyProfile } from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CompanyProfile/>} />
      </Routes>
    </>
  );
}

export default App;
