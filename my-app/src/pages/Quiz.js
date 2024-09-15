import React, { useState, useEffect, Fragment, useRef } from "react";
import apiFetchAsync from "../components/FetchFromApiAsync";
import { Box, Button, Typography, Radio, RadioGroup, FormControlLabel, FormControl, FormHelperText, FormLabel } from "@mui/material";
import { bool } from "prop-types";

const Quiz = () => {
    const [questions, setQuestions] = useState([]);
    const score = useRef(0);
    const [helperText, setHelperText] = useState('Pick an option');
    const [error, setError] = useState(false);
    const [questionSelection, setQuestionSelection] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([{}]); // Track selected answers for each question
    const [currentAnswer, setCurrentAnswer] = useState([]);

    // Handle change by setting the selected answer ID
    const handleRadioChange = (event, answers, questionIndex) => {
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
            <Box key={index} sx={{ marginBottom: 3 }}>
                <FormControl error={error} component="fieldset" variant="standard">
                    <FormLabel component="legend">{question.question}</FormLabel>
                    <RadioGroup
                        aria-label={`quiz-${index}`}
                        name={`quiz-${index}`}
                        value={currentAnswer || ''} // Get the selected answer or empty string if not answered
                        onChange={(event) => {
                            handleRadioChange(event, question.listOfAnswers, index);
                        }}
                    >
                        {question.listOfAnswers.map(( answer , i) => (
                            <FormControlLabel
                                key={i}
                                value={answer}
                                control={<Radio />}
                                label={answer}
                            />
                        ))}
                    </RadioGroup>
                    <FormHelperText>{helperText}</FormHelperText>
                </FormControl>
            </Box>
        );
    });

    const submitEvent = () => {
        score.current = 0; // Reset score before calculation

        questions.forEach((question, index) => {
            console.log(selectedAnswers[index+1])
            if (selectedAnswers[index+1] === question.correctAnswer) {
                score.current += 1; // Increment score if the selected answer ID matches the correct answer ID
            }
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
                onClick={submitEvent}
            >
                Submit
            </Button>
        );
    };

    return (
        <Fragment>
            {questionDisplay[questionSelection]}
            {questionSelection < questions.length ? nextButton() : submitButton()}
        </Fragment>
    );
};

export default Quiz;
