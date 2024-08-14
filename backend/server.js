import express from 'express';

import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoutes.js';


//app config

const app = express();
const port = process.env.PORT || 4000;



//middleware
app.use(express.json());
app.use(cors());

//db connection

connectDB();

//api routes
app.use('/api/food',foodRouter);
app.use('/images',express.static('uploads'));

app.get('/', (req, res) =>
     res.status(200).send('Hello World')
);


app.listen(port, () => console.log(`Listening on localhost: ${port}`));

//