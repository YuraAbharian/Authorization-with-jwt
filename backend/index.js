const express = require("express");
const mongoose = require('mongoose');
const app = express(); 
const authRouter = require('./routes/authRoutes');
// options 
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
   
}
// connection to MongoDB 
 mongoose.connect('mongodb://localhost:27017/test', options, ()=>{
     console.log('MongoDB database in started up!')
    })
// Port
const port = 5000;
//use
app.use(express.json());
//routes
app.use(authRouter);

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
    });
