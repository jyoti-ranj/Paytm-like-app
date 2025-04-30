const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:po8swOE57abiOCt9@cluster0.799bz.mongodb.net/Paytm');

const userSchema = mongoose.Schema({
    userName:{
        type: String, 
        required: true, 
        unique: true,
        trim: true,
        lowerCase: true,
        minlenght:3,
        maxlength: 30,
    },
    firstName:{
        type:String,
        required: true,
        trim: true,
        maxlength:50
    },
    lastName:{
     type:String,
     required: true,
     trim: true,
     maxlength:50
    },
    gender:{
     type: String, 
     required: true, 
     enum: ['male', 'female', 'other']
    },
    password:{
      type:String,
      required: true,
      minlength: 6
    },
});

const accountSchema = mongoose.Schema({
    userId :{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    
    balance :{
        type:Number,
        required:true,
        default: 0
    }
});

const User = mongoose.model('users' , userSchema);
const Account = mongoose.model('Account',accountSchema)


module.exports ={
    User,
    Account
}