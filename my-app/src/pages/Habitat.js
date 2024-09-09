import React, { useEffect, useState } from "react";
import BackgroundElement from "../components/Background";
import apiFetchAsync from "../components/FetchFromApiAsync";



async function Habitat(name) {

    const realHabitat = await apiFetchAsync("habitat", name)

    return (
        <BackgroundElement
            title={`${name}`}
            subtitle={`${realHabitat.description}`}
            link="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Indore_zoo_gate.jpg/1280px-Indore_zoo_gate.jpg"
        >
            Test Page 101
        </BackgroundElement>
    )
}

export default Habitat;