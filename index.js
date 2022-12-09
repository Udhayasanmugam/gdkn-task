import express from "express";

import mongoose from "mongoose";
import multer from "multer";

 import customer from './routes/customer.js';
 import admin from './routes/admin.js';
 import login from './routes/login.js';
 import cors from 'cors'
import Plan from "./routes/plan.js";



// "email":"gokila1305@gmail.com", admin email
//     "password":"gokila123456"   admin password
  

const app = express();

// mongoose.connect('mongodb+srv://vasanthakumar8017:1234@cluster0.qjnmkan.mongodb.net/?retryWrites=true&w=majority')
// .then(()=>console.log('database connected to cluster'))
// .catch((e)=>console.log('error'))

mongoose.connect('mongodb://localhost/GDKNcollection')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());
app.use(cors());

 app.use('/api/customer',customer );
//  app.use('/api/admin',admin);
//  app.use('/api',login);
//  app.use('/api/plan',Plan)



const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`Listening on port ${port}...`));