const mongoose=require('mongoose');
const signupTemplate=new mongoose.Schema(
    {
        fullName:
        {
            type:String,
            require:true
        },
        age:
        {
            type:String,
            require:true
        },
        email:
        {
            type:String,
            require:true
        },
        contact:
        {
            type:String,
            require:true
        },
        gender:
        {
            type:String,
            require:true
        },
        illnes:
        {
            type:String,
            require:true
        },
        date:
        {
            type:Date,
            default:Date.now
        },

    }
)

module.exports=mongoose.model('mytable',signupTemplate)