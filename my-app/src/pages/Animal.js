import React, { useEffect, useState } from "react";
import BackgroundElement from "../components/Background";
import apiFetchAsync from "../components/FetchFromApiAsync";
import { Typography } from "@mui/material";
import { Box } from '@mui/material';
import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const Animal = ({ name }) => {

    const [animal, setAnimal] = useState(null);

    useEffect(() => {
        const fetchAnimal = async () => {
            const animalData = await apiFetchAsync("animal", name);
            setAnimal(animalData);
        };

        fetchAnimal();
    }, [name]);

    if (!animal) {
        return <p>Loading animal data...</p>;
    }

    return (
        <BackgroundElement
            title={name}
            link={animal.main_pic}
        >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', justifyContent: "space-around", alignItems: 'center', }}>
                <Card sx={{ backgroundColor: '#00000046', mb: '20px' }}>
                    <CardMedia
                        component="img"
                        image={animal.pic1}
                        sx={{
                            height: '150px', // Adjust this to control card height
                            objectFit: 'cover', // Ensures image maintains aspect ratio
                        }}
                    />
                    <CardContent sx={{
                        color: 'white',
                    }}>
                        <Typography variant="h5" component="div">
                            Height:
                        </Typography>
                        <Typography variant="body1" component="div">
                            {animal.height}
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: '#00000046', mb: '20px', maxWidth: '300px' }}>
                    <CardMedia
                        component="img"
                        image={animal.pic2}
                        sx={{
                            height: '150px', // Adjust this to control card height
                            objectFit: 'cover', // Ensures image maintains aspect ratio
                        }}
                    />
                    <CardContent sx={{
                        color: 'white',
                    }}>
                        <Typography variant="h5" component="div">
                            About:
                        </Typography>
                        <Typography variant="body1" component="div">
                            {animal.description}
                        </Typography>
                    </CardContent>
                </Card>
                <Card sx={{ backgroundColor: '#00000046', mb: '20px' }}>
                    <CardMedia
                        component="img"
                        image={animal.pic3}
                        sx={{
                            height: '150px', // Adjust this to control card height
                            objectFit: 'cover', // Ensures image maintains aspect ratio
                        }}
                    />
                    <CardContent sx={{
                        color: 'white',
                    }}>
                        <Typography variant="h5" component="div">
                            Lifespan:
                        </Typography>
                        <Typography variant="body1" component="div">
                            {animal.lifespan}
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </BackgroundElement>
    )
}

export default Animal;