const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const { application } = require('express')
require('dotenv').config()

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(cors)


const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(  `Application is no running on port ${port}`)
})
