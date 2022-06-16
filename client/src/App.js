import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import JobList from './views/JobList/JobList';
import Formulaire from './views/Form/Formulaire';
import Quiz from './views/Quiz/Quiz';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import Dashboard from './views/Dashboard/Dashboard';
import { ScoreProvider } from './views/Helpers/scoreContext';
import { StyledContainer } from './components/Styles';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  return (
    <StyledContainer>
      <BrowserRouter>
        <ScoreProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/joblist" element={<JobList />} />
            <Route path="/form" element={<Formulaire />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </ScoreProvider>
      </BrowserRouter>
    </StyledContainer>
  );
}

export default App;
