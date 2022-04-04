import express from 'express'
import "dotenv/config"
import bodyParser from 'body-parser'
import postRoutes from './routes/routes.js'
import mongoose from 'mongoose'
import 'dotenv/config'
import cors from 'cors'

const app = express()

app.use(bodyParser.json({limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}))

app.use(cors())
app.use(postRoutes)




const PORT = process.env.PORT|| 4000;

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

