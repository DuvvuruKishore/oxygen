import express from 'express';
const app=express();
import dotenv  from "dotenv";
dotenv.config();

import mongoose from'mongoose';

import cors from 'cors';
import postRoutes from './routes/posts.js';



app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
app.use('/posts',postRoutes);

 
//const CONNECTION_URL="mongodb+srv://kishore:kisman@cluster0.dvpc4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const CONNECTION_URL=process.env.DATABASE_ACCESS;

const PORT=process.env.PORT||4000;
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`server running in ${PORT}`)))
.catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify',false);
