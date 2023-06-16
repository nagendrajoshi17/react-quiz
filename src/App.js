import './App.css';
import Navbar from './components/Navbar';
import QuizScreen from './components/QuizScreen';
import Home from './components/Home';
import QuizScreenTwo from './components/QuizScreenTwo';
import QuizScreenThree from './components/QuizScreenThree';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/quizscreen' element={<QuizScreen />} />
          <Route exact path='/quizscreentwo' element={<QuizScreenTwo />} />
          <Route exact path='/quizscreenthree' element={<QuizScreenThree />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
