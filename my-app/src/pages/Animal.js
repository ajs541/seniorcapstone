import React, { useEffect, useState } from "react";
import BackgroundElement from "../components/Background";
import apiFetchAsync from "../components/FetchFromApiAsync";
import { Button } from "@mui/material";
import { Box } from '@mui/material';
import { Link } from "react-router-dom";

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
            link={animal.main_pic} // PLEASE CHANGE THIS LATER
        >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', justifyContent: "space-around", alignItems: 'center', }}>
                <Box>
                    <p>{animal.height}</p>
                </Box>
                <Box>
                    <p>{animal.description}</p>
                </Box>
                <Box>
                    <p>{animal.lifespan}</p>
                </Box>
            </Box>
        </BackgroundElement>
    )
}

export default Animal;