import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {dialogsRoutes, authRouter, postsRoutes ,postRoutes} from "./routes";

const app = express();

// options 
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

// connection to MongoDB 
 mongoose.connect('mongodb://localhost:27017/test', options, ()=>{
     console.log('MongoDB database in started up!')
    });

// Port
const port = 3001;

//use
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
//routes

app.use(authRouter);
app.use(postRoutes);
app.use(dialogsRoutes);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
    });

// const Auth = require('./model/auth');
// const main= async ()=> {
//    const resp = await Auth.findById('5dd13527a996c91baccdb47c');
//    await  resp.populate('userDT').execPopulate();
//     console.log(resp.userDT)
// };
//
// main();