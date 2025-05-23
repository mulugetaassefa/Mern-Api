const express =require('express');
const cors =require('cors');
const cookieParse =require('cookie-parse');
const helmet = require('helmet');
const dotenv =require('dotenv')
const mongoose =require('mongoose');
const connectedDB =require('./config/db');

// import route
const authRouter=require('./routes/authRouter');
const postRouter =require('./routes/postRouter');
// intialize
const app =express();
app.use(cors());
app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({extended:true}));


 //Databse connected
 dotenv.config();
  connectedDB();

  app.use('/api/auth',authRouter);
  app.use('/api/auth',postRouter)
//  app.use('/api/posts', postsRouter);


//Root route
app.get('/', (req,res) =>
res.send('API is running ....'));
  // route


const PORT =process.env.PORT || 5000;
app.listen(PORT, () =>console.log(`Server running on ${PORT}`))