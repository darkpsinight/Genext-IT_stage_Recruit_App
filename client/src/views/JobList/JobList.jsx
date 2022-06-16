import React from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import './JobList.css'


const Home = () => {
    return (
        <div className='container'>
            <div className='title'>
                <h1>Welcome to the list of jobs :</h1>
            </div>
            <div className='list'>
                <Box>
                    <nav aria-label="jobList">
                        <List>
                            <p>Please choose a job from below to apply :</p>
                            <Divider sx={{ margin: 1 }} />
                            <div className='jobslist'>
                                <Card sx={{ maxWidth: 600, marginLeft: 2 }}>
                                    <CardActionArea href='/form'>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Stage Développeur PHP Laravel + FO React JS
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                On ai à la recherche d'un(e) développeur jeune diplômé PHP Laravel et React JS
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Divider sx={{ margin: 1 }} />
                                <Card sx={{ maxWidth: 600, marginLeft: 2 }}>
                                    <CardActionArea href='/form'>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Développeurs Confirmés React JS (H/F)
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                <p>En tant que développeur React JS, vous serez intégré dans une équipe projet sous la responsabilité d'un chef de projet technique.</p>
                                                <p>
                                                    Nous vous proposons de :</p>
                                                <p>
                                                    • Participer à des projets d'intégration de plateformes leaders du marché (SAP Hybris, Mirakl, Magento, …), enrichir et faire évoluer ces intégrations pour accompagner les expérimentations e-commerce de nos clients</p>
                                                <p>
                                                    • Bénéficier d'un encadrement expérimenté qui vous permettra de progresser en permanence
                                                </p>
                                                <p>
                                                    • Intervenir dans des contextes stratégiques pour nos clients, engagés dans des transformations e-commerce, pour vivre des challenges variés
                                                </p>
                                                <p>
                                                    • Développer vos compétences techniques, fonctionnelles, projets, … afin de vous ouvrir à de multiples voies d'évolution et d'orientation de votre carrière
                                                    • Participer à un projet d'entreprise innovant et ambitieux</p>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Divider sx={{ margin: 1 }} />
                                <Card sx={{ maxWidth: 600, marginLeft: 2 }}>
                                    <CardActionArea href='/form'>
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Développeur Fullstack (REACT JS, Laravel, PHP, POSTGRES)
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                Société présente depuis plus de 15 ans en Tunisie recherche un développeur.
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                        </List>
                    </nav>
                </Box>
            </div>
        </div>
    )
}

export default Home