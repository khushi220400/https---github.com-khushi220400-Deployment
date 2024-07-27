import express from "express";
import{config} from "dotenv";
import cors from "cors";
import { sendEmail } from "./utils/sendEmail.js";
const app=express()
const router=express.Router()
//console.log(process.env.PORT)    
config({path:"./config.env"})
app.use(cors({ 
    origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

router.post("/send/mail",async(req,res,next)=>{
    const {name,email,message}=req.body;
    if(!name||!email||!message){
        return next(
            res.status(400).json({
                success:false,
                message:"Please provide all details",
            })
            

        )
      
    }
    try{
        await sendEmail({
            email:"11e21khushi@gmail.com",
            subject:" FITNESS GYM CONTACT ",
            message,
            userEmail:email,

        })
        res.status(200).json({
            success:true,
            message:"Message Sent Successfully"
        })

    }
    catch(error){
        res.status(500).json({
            success:false,
            message:"Internal Server Error",
        })

    }


})

router.get('/',(req,res,next)=>{
    res.json({sucess:true, message:"WELCOME"})
})

app.use(router)
app.listen(process.env.PORT,()=>{
    console.log(`Server listening at port ${process.env.PORT} `)
})