import './App.css';
import React, { Fragment, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Habitats from './pages/Habitats';

const Main = () => (
  <Fragment>
    <h1>Error 404</h1>
    <p>Section not found.   whyyyyyy</p>
  </Fragment>
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/*" element={<Main />} />
        <Route path="/Habitats" element={<Habitats />} />
      </Routes>
    </div>
  );
}

export default App;
