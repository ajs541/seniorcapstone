import React, { useEffect, useState } from "react";
import BackgroundElement from "../components/Background";
import apiFetchAsync from "../components/FetchFromApiAsync";
import { Box } from '@mui/material';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';


const Habitat = ({ name }) => {
    // Initialize habitat state as an empty object
    const [habitat, setHabitat] = useState(null);

    useEffect(() => {
        const fetchHabitat = async () => {
            const habitatData = await apiFetchAsync("habitat", name);
            setHabitat(habitatData);
        };

        fetchHabitat();
    }, [name]);  // Dependency on 'name' to refetch if the habitat name changes

    // Conditional rendering to handle loading state
    if (!habitat) {
        return <p>Loading habitat data...</p>;
    }

    return (
        <BackgroundElement
            title={name}
            subtitle={habitat.description}
            link={habitat.picture}
        >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', justifyContent: "space-around", alignItems: 'center', }}>
                {habitat.animals && habitat.animals.length > 0 ? (
                    habitat.animals.map((animal, index) => (
                        <Card key={index} sx={{ backgroundColor: '#00000046', mb: '20px' }}>
                            <CardActionArea component={Link} to={`/Habitats/${name}/${animal.name}`}>
                                <CardMedia
                                    component="img"
                                    image={animal.main_pic}
                                    sx={{
                                        height: '150px', // Adjust this to control card height
                                        objectFit: 'cover', // Ensures image maintains aspect ratio
                                    }}
                                />
                                <CardContent sx={{
                                    color: 'white',
                                }}>
                                    <Typography variant="h2" component="div">
                                        {animal.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))
                ) : (
                    <p>Loading habitats...</p>
                )}
            </Box>
        </BackgroundElement>
    );
}

export default Habitat;
{/*
{habitat.animals && habitat.animals.length > 0 ? (
                habitat.animals.map((animal, index) => (
                    <Box key={index} sx={{width: '100%', justifyContent: "space-around", alignItems: 'center',}}>
                        <Button component={Link} to={`/Habitats/${name}/${animal}`} variant="contained">
                            {animal}
                        </Button>
                    </Box>
                ))
            ) : (
                <p>No animals found in this habitat</p>
            )}
*/}
