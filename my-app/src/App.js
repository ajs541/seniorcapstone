import './App.css';
import React, { Fragment, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Habitats from './pages/Habitats';
import Habitat from './pages/Habitat';
import Animal from './pages/Animal';

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
        <Route path="/Habitats/Grasslands" element={<Habitat name="Grasslands" />} />
        <Route path="/Habitats/Rainforest" element={<Habitat name="Rainforest" />} />
      </Routes>
    </div>
  );
}

export default App;
