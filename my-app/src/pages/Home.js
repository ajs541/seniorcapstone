import React from "react";
import BackgroundElement from "../components/Background";
import { Box } from '@mui/material'
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Button } from '@mui/material'

// Very Basic homepage, displays blurred background, with two buttons.

const Home = () => (
  <BackgroundElement
    title="Welcome to WebSafari!"
    subtitle="Click the Enter button to start."
    link="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Indore_zoo_gate.jpg/1280px-Indore_zoo_gate.jpg"
  >
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', justifyContent: "space-around", alignItems: 'center', }}>
      <Card sx={{ backgroundColor: '#00000046', }}>
        <CardActionArea component={Link} to="/Habitats">
          <CardMedia
            component="img"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Gate_-_Wilhelma_Zoo_-_Stuttgart%2C_Germany_-_DSC01683.jpg/1280px-Gate_-_Wilhelma_Zoo_-_Stuttgart%2C_Germany_-_DSC01683.jpg"
            sx={{
              height: '200px', // Adjust this to control card height
              objectFit: 'cover', // Ensures image maintains aspect ratio
            }}
          />
          <CardContent sx={{
            color: 'white',
          }}>
            <Typography variant="h2" component="div">
              Enter
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Button component={Link} to="/Quiz">
          <Typography>
            Quiz
          </Typography>
      </Button>
    </Box>
  </BackgroundElement>
)

export default Home;

/*
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
*/