import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import mongoose from "mongoose";
import postRoutes from './routes/posts.js'
import 'dotenv/config'




const app = express();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());


app.use('/posts', postRoutes)

const port = process.env.PORT || 4000;

const CONNECTION_URL = process.env.MONGO_URI;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Application is no running on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

