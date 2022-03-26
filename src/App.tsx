import React from 'react';
import './App.css';
import HomePage from "./features/HomePage/HomePage";
import {Box, Container, Typography} from "@mui/material";

function App() {
    return (
        <Container maxWidth="sm">
            <Box sx={{my: 4}}>
                <Typography variant="h4" component="h1" gutterBottom>
                    <HomePage title={"Milas Dirties"}/>
                </Typography>
            </Box>
        </Container>
    );
}

export default App;

