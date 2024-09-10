import React, { useEffect, useState } from "react";
import BackgroundElement from "../components/Background";
import { Button } from "@mui/material";
import { Box } from '@mui/material';
import { Link } from "react-router-dom";
import apiFetchAsync from "../components/FetchFromApiAsync";

const Habitats = () => {
  const [hList, setHList] = useState([]);

  useEffect(() => {
    const fetchHabitats = async () => {
      const habitats = await apiFetchAsync("habitatList", null);
      setHList(habitats);  // Set the fetched list to state
    };

    fetchHabitats();  // Fetch data when component mounts
  }, []);

  return (
    <BackgroundElement
      title="Choose a habitat."
      link="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/View_over_the_garden_square_Artisplein_with_bird_cage%3B_free_photo_Amsterdam%2C_Fons_Heijnsbroek%2C_10-2022.jpg/1280px-View_over_the_garden_square_Artisplein_with_bird_cage%3B_free_photo_Amsterdam%2C_Fons_Heijnsbroek%2C_10-2022.jpg"
    >
      {/* Map over the hList array to display the list of habitats */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', justifyContent: "space-around", alignItems: 'center', }}>
        {hList.length > 0 ? (
          hList.map((habitat, index) => (
            <Box key={index}>
              <Button component={Link} to={`/Habitats/${habitat}`} variant="contained">
                {habitat}
              </Button>
            </Box>
          ))
        ) : (
          <p>Loading habitats...</p>
        )}
      </Box>
    </BackgroundElement >
  );
};

export default Habitats;
