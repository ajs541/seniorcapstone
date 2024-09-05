import React from "react";
import BackgroundElement from "../components/Background";
import { Button } from "@mui/material";
import { Box } from '@mui/material'
import { Link} from "react-router-dom";

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

export default Home;