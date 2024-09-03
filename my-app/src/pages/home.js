import React from "react";
import BackgroundElement from "../components/Background";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const pages = ['Habitats']

export default function home() {
    
    return (
        <div className="home">
            <BackgroundElement
                title="Welcome to WebSafari!"
                subtitle="Click the habitats button to start."
                link="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Indore_zoo_gate.jpg/1280px-Indore_zoo_gate.jpg"
            >
                <Button>

                </Button>
            </BackgroundElement>
        </div>
    )
}
