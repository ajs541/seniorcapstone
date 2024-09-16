import React, { useState, useEffect, useRef } from "react";
import apiFetchAsync from "../components/FetchFromApiAsync";
import { Box, Button, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormHelperText, FormLabel, Card, CardContent } from "@mui/material";
import BackgroundElement from "../components/Background";
const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const score = useRef(0);
    const [helperText, setHelperText] = useState('Pick an option');
    const [error, setError] = useState(false);
    const [questionSelection, setQuestionSelection] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([{}]); // Track selected answers for each question
    const [currentAnswer, setCurrentAnswer] = useState([]);
    const [showAnswer, setShowAnswer] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState([]);

    // Handle change by setting the selected answer ID
    const handleRadioChange = (event) => {
        setCurrentAnswer(event.target.value);
        setHelperText(' ');
        setError(false);
    };

    useEffect(() => {
        const fetchQuestions = async () => {
            const qList = await apiFetchAsync("questions", null);

            // Map the fetched data into the correct structure
            const newList = qList.map((element) => ({
                question: element.question,
                correctAnswer: element.answer,
                listOfAnswers: [
                    element.A,
                    element.B,
                    element.C,
                    element.D
                ]
            }));
            setQuestions(newList);
        };

        fetchQuestions();
    }, []);

    const questionDisplay = questions.map((question, index) => {

        return (
            <Card key={index} sx={{ backgroundColor: '#00000075', marginBottom: 3 }}>
                <CardContent sx={{ color: "white" }}>
                    <FormControl error={error} component="fieldset" variant="standard">
                        <FormLabel component="legend" sx={{color: "white"}}>{question.question}</FormLabel>
                        <RadioGroup
                            aria-label={`quiz-${index}`}
                            name={`quiz-${index}`}
                            value={currentAnswer || ''} // Get the selected answer or empty string if not answered
                            onChange={(event) => {
                                handleRadioChange(event, question.listOfAnswers, index);
                            }}
                        >
                            {question.listOfAnswers.map((answer, i) => (
                                <FormControlLabel
                                    key={i}
                                    value={answer}
                                    control={<Radio />}
                                    label={answer}
                                />
                            ))}
                        </RadioGroup>
                        <FormHelperText sx={{color: "white"}}>{helperText}</FormHelperText>
                    </FormControl>
                </CardContent>
            </Card>
        );
    });

    const submitEvent = () => {
        score.current = 0; // Reset score before calculation

        questions.forEach((question, index) => {
            console.log(selectedAnswers[index + 1])
            if (selectedAnswers[index + 1] === question.correctAnswer) {
                score.current += 1; // Increment score if the selected answer ID matches the correct answer ID
                setCorrectAnswers(prev => ([
                    ...prev,
                    "Correct"
                ]));
            } else {
                setCorrectAnswers(prev => ([
                    ...prev,
                    "Incorrect"
                ]))
            };
        });

        console.log("Final Score:", score.current);
    };


    const nextButton = () => {
        return (
            <Button
                variant="contained"
                sx={{ marginTop: 2 }}
                onClick={() => {
                    setSelectedAnswers(prev => ([
                        ...prev,
                        currentAnswer // Use the question index as the key
                    ]));
                    setQuestionSelection(prevSelection => prevSelection + 1); // Increment question selection
                }}
            >
                Next
            </Button>
        );
    };

    const submitButton = () => {
        return (
            <Button
                variant="contained"
                sx={{ marginTop: 2 }}
                onClick={() => {
                    submitEvent();
                    setShowAnswer(true);
                }}
            >
                Submit
            </Button>
        );
    };

    const answerComponent = () => {

        return (
            <Card sx={{ backgroundColor: '#00000046', marginBottom: 3, color: "white" }}>
                <CardContent>
                    <Typography variant="h3" component="div">
                        Your score is: {score.current}
                    </Typography>
                    {correctAnswers.map((element) => {
                        return (
                            <Typography variant="h5" component="div">
                                {element}
                            </Typography>
                        )
                    })}
                </CardContent>
            </Card>
        );
    };

    return (
        <BackgroundElement
            title="Quiz Time!"
            link="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/CopperChlorideCrystals.jpg/1280px-CopperChlorideCrystals.jpg"
        >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%', justifyContent: "space-around", alignItems: 'center', }}>
                <Box>
                    {questionDisplay[questionSelection]}
                    {!showAnswer ? (questionSelection < questions.length ? nextButton() : submitButton()) : answerComponent()}
                </Box>
            </Box>
        </BackgroundElement>
    );
};

export default Quiz;
