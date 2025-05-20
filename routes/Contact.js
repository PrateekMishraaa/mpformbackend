import express from "express"
const router = express.Router()
import Contact from "../models/ContactForm.js"




router.post('/contact',async(req,res)=>{
    const {Name, Email,Mobile,Message} = req.body;
    if(!Name  || !Email || !Mobile || !Message){
        res.status(400).json({message:"All fields are required"})
    }
    try{
            const newForm = await Contact.create({
                Name,
                Email,
                Mobile,
                Message
            })
            await newForm.save()
            console.log(newForm)
            res.status(200).json({message:"Form submitted successfully",newForm})
    }catch(error){
        console.log(error)
        res.status(500).json({message:"Internal server error",error})
    }
})







export default router