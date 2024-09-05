import './App.css';
import React, { Fragment, useState } from "react";
import BackgroundElement from './components/Background';
import { Button } from "@mui/material";
import { BrowserRouter as Router, Route, Link, Routes, Outlet } from "react-router-dom";
import { Box } from '@mui/material'
let habitatsData;

fetch('http://127.0.0.1:5000/habitats')
  .then(response => response.json())
  .then(data => {
    habitatsData = data;
    console.log(data);
  })
  .catch(error => console.error('Error:', error));

const Main = () => (
  <Fragment>
    <h1>Error 404</h1>
    <p>Section not found.</p>
  </Fragment>
);

const NotFound = () => (
  <h1>404 page not found</h1>
);

const Home = () => (
  <BackgroundElement
    title="Welcome to WebSafari!"
    subtitle="Click your grade level to start."
    link="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Indore_zoo_gate.jpg/1280px-Indore_zoo_gate.jpg"
  >
    <Box sx={{display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', justifyContent: "space-around", alignItems: 'center', }}>
      <Box>
        <Button component={Link} to="/Habitats" variant="contained">
          K-2
        </Button>
      </Box>
      <Box>
        <Button component={Link} to="/Habitats" variant="contained">
          3-6
        </Button>
      </Box>
    </Box>
  </BackgroundElement>
)

const Habitats = () => (
  <BackgroundElement
    title="Choose a habitat."
    link="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/View_over_the_garden_square_Artisplein_with_bird_cage%3B_free_photo_Amsterdam%2C_Fons_Heijnsbroek%2C_10-2022.jpg/1280px-View_over_the_garden_square_Artisplein_with_bird_cage%3B_free_photo_Amsterdam%2C_Fons_Heijnsbroek%2C_10-2022.jpg"
  >
    <p>Testing page</p>
  </BackgroundElement>
)


function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/*" element={<Main />} />
        <Route path="/Habitats" element={<Habitats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
