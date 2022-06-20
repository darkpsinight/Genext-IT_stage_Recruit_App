import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

//auth & redux
import AuthRoute from './components/AuthRoute';
import BasicRoute from './components/BasicRoute';
import { connect } from 'react-redux'


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
            <Route path="*" element={<h1>There's nothing here: 404!</h1>} />

            {/*
            <Route
              path="/joblist"
              element={
                <AuthRoute>
                  <JobList />
                </AuthRoute>
              } />
            */}



            {/* 
            <Route
              element={
                <AuthRoute />
              } >
              <Route path="/joblist" element={<JobList />} />
            </Route> 
            */}


            {/* <BasicRoute path="/login" element={<Login />} />
                <AuthRoute path="/joblist" element={<JobList />} /> 
            */}



          </Routes>
        </ScoreProvider>
      </BrowserRouter>
    </StyledContainer>
  );
}
const mapStateToProps = ({ }) => ({
  checked: sessionStorage.checked
})

export default connect()(App);
