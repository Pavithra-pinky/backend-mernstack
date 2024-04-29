const express=require('express');
const router=express.Router()
const signupTemplatecopy=require('../models/SignupModels');


router.post("/signup",(request,response)=>
{
    const sam=new signupTemplatecopy(
        {
            fullName:request.body.fullName,
            age:request.body.age,
            email:request.body.email,
            contact:request.body.contact,
            gender:request.body.gender,
            illnes:request.body.illnes
        })
        sam.save().then(data=>
        {
            response.json(data);
            console.log('data added successfully');
        }).catch(error=>
        {
            express.response.json(error)
        })
})


module.exports=router;