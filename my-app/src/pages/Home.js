import React from "react";
import BackgroundElement from "../components/Background";
import { Button } from "@mui/material";
import { Box } from '@mui/material'
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

// Very Basic homepage, displays blurred background, with two buttons.

const Home = () => (
  <BackgroundElement
    title="Welcome to WebSafari!"
    subtitle="Click your grade level to start."
    link="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Indore_zoo_gate.jpg/1280px-Indore_zoo_gate.jpg"
  >
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', justifyContent: "space-around", alignItems: 'center', }}>
      <Card sx={{backgroundColor: 'transparent',}}>
        <CardActionArea component={Link} to="/Habitats">
          <CardMedia
            component="img"
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Kindergarten_is_fun_%282908834379%29.jpg/1024px-Kindergarten_is_fun_%282908834379%29.jpg"
            sx={{
              filter: 'blur(1px)',   
              height: '200px', // Adjust this to control card height
              objectFit: 'cover', // Ensures image maintains aspect ratio
              }}
          />
          <CardContent sx={{
            color: 'white',
            }}>
            <Typography variant="h2" component="div">
              K-2
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
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