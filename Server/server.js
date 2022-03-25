import express from 'express'
import "dotenv/config"
import bodyParser from 'body-parser'
import postRoutes from './routes/routes.js'

const app = express()

app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))


app.use(postRoutes)

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`process is now running on ${port}`)
})