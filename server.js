const express = require('express')
const fileUpload = require('express-fileupload')
const cors = require('cors')
const mongoose = require('mongoose')
const nodemailer = require('nodemailer')
const path = require('path')
require("dotenv").config()

const SrcRoute = require('./server/routes/src')
const StudentRoute = require('./server/routes/student')
const WelcomeRoute = require('./server/routes/welcome')
const GalleryRoute = require('./server/routes/gallery')
const SeminarRoute = require('./server/routes/seminar')
const NewsRoute = require('./server/routes/news')
const InfoRoute = require('./server/routes/info')
const BudgetRoute = require('./server/routes/budget')
const HandoutRoute = require('./server/routes/handout')
const TimetableRoute = require('./server/routes/timetable')
const EcommerceRoute = require('./server/routes/ecommerce')
const VoterRoute = require('./server/routes/voter')
const MessageRoute = require('./server/routes/message')
const PollRoute = require('./server/routes/poll')
const ApplicationRoute = require('./server/routes/application')



require ('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(fileUpload())
app.use(cors())
app.use(express.json())

const uri = process.env.ATLAS_URI
mongoose.connect(process.env.MONGODB_URI || uri, {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false})

const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
})


app.use('/src', SrcRoute)
app.use('/student',StudentRoute)
app.use('/welcome',WelcomeRoute )
app.use('/gallery',GalleryRoute)
app.use('/seminar',SeminarRoute)
app.use('/news', NewsRoute)
app.use('/info', InfoRoute)
app.use('/budget', BudgetRoute)
app.use('/handout', HandoutRoute)
app.use('/timetable', TimetableRoute)
app.use('/ecommerce', EcommerceRoute)
app.use('/voter', VoterRoute)
app.use('/message', MessageRoute)
app.use('/poll', PollRoute)
app.use('/application', ApplicationRoute)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"))
    })
}

app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`)
})