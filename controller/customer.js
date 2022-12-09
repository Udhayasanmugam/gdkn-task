import  {User, validateUser} from '../models/customer.js'; 
import { Video } from '../models/video.js';
import Plan from '../models/plan.js';


import bodyParser from 'body-parser';

import express from "express"
import  bcrypt from 'bcrypt';


const app=express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.text())





import  jwt from 'jsonwebtoken';

const saltRounds=10;




// const watchVideos=async(req,res)=>{
//     let _id=req.user._id
//     try {
//         const user=await User.findOne({_id})
//         if(user){
//             if(user.subscribed==true){
//                 const data=await Video.find()
//                 if(data.length<=0) return res.send('No videos Found')
//                 return res.send(data)
//             }
//             else return res.send('Please Subscribe to Watch Videos')
//         }
//     } catch (error) {
//         return res.send(error.message)
//     }
// }


const Customer=(req,res)=>{  
    const {error}=validateUser(req.body)
    if (error){
        return res.status(400).send(error.details[0].message);
    }


    const saltRoute=10;
    bcrypt.hash(req.body.password,saltRoute,function(err,hash){
        var newUser={            
            name:req.body.name ,
            email:req.body.email,
            password:hash,
            mobileno:req.body.mobileno, 
            isAdmin:req.body.isAdmin,
        
        }
    
async function createUser(){
       
         try {
            var existingUser=await User.findOne({email: newUser.email })
            // console.log(existingUser);                   

             if(!existingUser){
             var user=await User.insertMany([newUser])
             console.log(user);     
             res.status(200).send(user);}
             
            else{
                res.status(400).send("User can already exist!")}
            }
        catch (error) {
            res.status(400).send(error.message)
         }
}createUser();})

}  

// const updatesubscribe=async(req,res)=>{
//     let _id=req.user._id
//     let planId=req.body.planId
//     try {
//         const plan=await Plan.findOne({planId:planId})
//         if(plan){
//             const user=await User.updateOne({_id},{$set:{
//                 subscribed:true,
//                 plan:plan
//             }})
//             if(user) return res.send(user)
//         }
//     } catch (error) {
//         return res.send(error.message)
//     }

// }

const removeCustomer=(req,res)=>{
    var newValue={
            fno:parseInt(req.body.fno),
            name:req.body.name       
            }
     async function deleteCustomer(){
                const f_no=parseInt(req.body.fno)
                // console.log(g_id)
                 try {
                     var existingCustomer=await User.findOne({ fno: f_no })
                     console.log(existingCustomer);
                    if(!existingCustomer){
                        res.send("user can't exits")
                    }
                    if(existingCustomer){
                        let dlt= await User.deleteOne({fno:newValue.fno})
                        res.send(dlt)
                    }                         
    
                }
                catch (error) {
                     console.log(error.message)
                 }
      }
      deleteCustomer();
    }  


  

export {Customer,removeCustomer}