import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './JobList.css';
import { getAllJob } from '../../auth/actions/submitJob';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getAllJob((response) => {
        console.log({ response });
        setJobs(response);
      })
    );
  }, []);

  const [jobs, setJobs] = useState([]);


  return (
    <div className="container">
      <div className="title">
        <h1>Welcome to the list of jobs :</h1>
      </div>
      <div className="list">
        <Box>
          <nav aria-label="jobList">
            <List>
              <p>Please choose a job from below to apply :</p>
              <Divider sx={{ margin: 1 }} />
              <div className="jobslist">
                <Card sx={{ maxWidth: 600, marginLeft: 2 }}>
                  <CardActionArea href="/form">
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        Stage Développeur PHP Laravel + FO React JS
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        On ai à la recherche d'un(e) développeur jeune diplômé
                        PHP Laravel et React JS
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
                <Divider sx={{ margin: 1 }} />
              </div>
            </List>
          </nav>
        </Box>
      </div>
    </div>
  );
};

export default Home;
