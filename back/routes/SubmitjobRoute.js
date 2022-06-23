const express = require('express')
const SubmitjobController = require('../controllers/submitjobController')
const router = express.Router()

const submitjobController = require('../controllers/submitjobController')
const submitjob = require('../models/SubmitjobModel')


router.post('/dashboard', (req, res) => {
    let { title, description } = req.body;
    title = title.trim();
    description = description.trim();

    //Try to create new job
    const newJob = new submitjob({
        title,
        description
    });
    newJob.save().then(result => {
        res.json({
            status: "SUCCESS",
            message: "New job added successful",
            data: result
        })
    })
        .catch(err => {
            res.json({
                status: "FAILED",
                message: "An error occured while adding new job!"
            })
        })
})

router.get('/listjob', SubmitjobController.getAll)
/* router.get('/listjob', (req, res) => {
    let { title, description } = req.body;
    title = title.trim();
    description = description.trim();

    if (title == "" || description == "") {
        res.json({
            status: "FAILED",
            message: "Empty credentials supplied!",
        })
    } else {
        //check if user exist
        submitjob.find({  })
            .then(data => {
                if (data) {
                    //user exists

                    const hashedPassword = data.password;
                    bcrypt.compare(password, hashedPassword)
                        .then(result => {
                            if (result) {
                                //Password match
                                res.json({
                                    status: "SUCCESS",
                                    message: "Login successful",
                                    data: data
                                })
                            } else {
                                res.json({
                                    status: "FAILED",
                                    message: "Invalid password entered!"
                                })
                            }
                        })
                        .catch(err => {
                            res.json({
                                status: "FAILED",
                                message: "An error occured while comparing passwords"
                            })
                        })
                } else {
                    res.json({
                        status: "FAILED",
                        message: "Invalid credentials entered!"
                    })
                }
            })
            .catch(err => {
                res.json({
                    status: "FAILED",
                    message: "An error occured while checking for existing user"
                })
            })
    }
}) */

module.exports = router