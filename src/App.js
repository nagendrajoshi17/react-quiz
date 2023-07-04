import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import QuizScreen from './components/QuizScreen';
import Home from './components/Home';
import QuizScreenTwo from './components/QuizScreenTwo';
import QuizScreenThree from './components/QuizScreenThree';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizscreen" element={<QuizScreen />} />
        <Route path="/quizscreentwo" element={<QuizScreenTwo />} />
        <Route path="/quizscreenthree" element={<QuizScreenThree />} />
      </Routes>
    </Router>
  );
}

export default App;
