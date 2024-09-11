import './App.css';
import React, { Fragment, useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Habitats from './pages/Habitats';
import Habitat from './pages/Habitat';
import Animal from './pages/Animal';
import apiFetchAsync from './components/FetchFromApiAsync';


const Main = () => (
  <Fragment>
    <h1>Error 404</h1>
    <p>Section not found. Why????</p>
  </Fragment>
);

function App() {
  const [habitatsData, setHabitatsData] = useState([]);

  useEffect(() => {
    const fetchHabitats = async () => {
      try {
        // Fetch habitat list first
        const habitatList = await apiFetchAsync("habitatList", null);

        // For each habitat, fetch its details including animals
        const habitatDetailsPromises = habitatList.map(async (habitat) => {
          const habitatDetails = await apiFetchAsync("habitat", habitat.name);
          return habitatDetails;
        });

        const detailedHabitats = await Promise.all(habitatDetailsPromises);
        setHabitatsData(detailedHabitats);
      } catch (error) {
        console.error("Error fetching habitats:", error);
      }
    };

    fetchHabitats();
  }, []);

  if (!habitatsData.length) {
    return <p>Loading habitats...</p>; // Loading state
  }

  return (
    <div className="App">
      <Routes>
        {/* Static routes */}
        <Route index element={<Home />} />
        <Route path="/*" element={<Main />} />
        <Route path="/Habitats" element={<Habitats />} />
        {/* /Habitats/:habitat */}
        {/* const params = useParams(); params.habitat */}

        {/* Dynamically generated habitat and animal routes */}
        {habitatsData.map((habitat) => (
          <Fragment key={habitat.habitat}>
            {/* Route for the individual habitat */}
            <Route
              path={`/Habitats/${habitat.habitat}`}
              element={<Habitat name={habitat.habitat} />}
            />

            {/* Route for each animal within the habitat */}
            {habitat.animals.map((animal) => (
              <Route
                key={animal}
                path={`/Habitats/${habitat.habitat}/${animal}`}
                element={<Animal name={animal} /*habitat={habitat.habitat} */ />}
              />
            ))}
          </Fragment>
        ))}
      </Routes>
    </div>
  );
}

export default App;
