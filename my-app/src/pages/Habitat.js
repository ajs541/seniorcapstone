import React, { useEffect, useState } from "react";
import BackgroundElement from "../components/Background";
import apiFetchAsync from "../components/FetchFromApiAsync";
import { Button } from "@mui/material";
import { Box } from '@mui/material';
import { Link } from "react-router-dom";

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
            link="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Indore_zoo_gate.jpg/1280px-Indore_zoo_gate.jpg"
        >
            {habitat.animals && habitat.animals.length > 0 ? (
                habitat.animals.map((animal, index) => (
                    <Box key={index}>
                        {/* Updated link path to match the static habitat name */}
                        <Button component={Link} to={`/Habitats/${name}/${animal}`} variant="contained">
                            {animal}
                        </Button>
                    </Box>
                ))
            ) : (
                <p>No animals found in this habitat</p>
            )}
        </BackgroundElement>
    );
}

export default Habitat;
