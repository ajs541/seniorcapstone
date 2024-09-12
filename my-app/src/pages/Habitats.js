import React, { useEffect, useState } from "react";
import BackgroundElement from "../components/Background";
import { Box } from '@mui/material';
import { Link } from "react-router-dom";
import apiFetchAsync from "../components/FetchFromApiAsync";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

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
            <Card key={index} sx={{ backgroundColor: '#00000046', mb: '20px'}}>
              <CardActionArea component={Link} to={`/Habitats/${habitat.name}`}>
                <CardMedia
                  component="img"
                  image={habitat.picture}
                  sx={{
                    height: '150px', // Adjust this to control card height
                    objectFit: 'cover', // Ensures image maintains aspect ratio
                  }}
                />
                <CardContent sx={{
                  color: 'white',
                }}>
                  <Typography variant="h2" component="div">
                    {habitat.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          ))
        ) : (
          <p>Loading habitats...</p>
        )}
      </Box>
    </BackgroundElement >
  );
};

export default Habitats;