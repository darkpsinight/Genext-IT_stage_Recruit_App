const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')

const FormRoute = require('./routes/FormRoute')
const SignupRoute = require('./routes/SignupRoute')

//database
mongoose.connect('mongodb://localhost:27017/form', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', (err) => {
  console.log(err)
})
db.once('open', () => {
  console.log("Database connection established!")
})


//app
const app = express()

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

//cors
const cors = require('cors')
/* app.use(cors()) */
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))

//server run
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

app.use('/api/form', FormRoute);
app.use('/api/form', SignupRoute);