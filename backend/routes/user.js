const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const JWT_SECRET = require("../config");
const {signup , signin ,updateData} = require("../types")
const {authMiddleware} = require("../middleware")
const {User ,Account} = require("../db")

router.post('/signup', async(req, res)=>{
   const Payload = req.body;
   console.log(Payload.userName)
   console.log(Payload.firstName)
   console.log(Payload.lastName)
   console.log(Payload.gender)
   console.log(Payload.password)
   if (!Payload.userName ||!Payload.firstName || !Payload.lastName ||!Payload.gender || !Payload.password){
    return res.status(400).json({ error: "All fields are required." });
   }
   const ParsePayload = signup.safeParse(Payload);
   if (!ParsePayload.success) {
      return res.status(400).json({message:"You are putting wrong input"})}

 const existingUser = await User.findOne({ userName: Payload.userName});
 if(existingUser){
    return res.status(409).json({
        message:"User already exist,please try to sign up with other username"
    })
 }

 const accountBalance = parseFloat((Math.random() * 10000 + 1).toFixed(2));
 

 const hashedPassword = await bcrypt.hash(Payload.password, 10) 

   const newUser = await User.create({
    userName: Payload.userName,
    firstName: Payload.firstName, 
    lastName: Payload.lastName, 
    gender: Payload.gender,
    password: hashedPassword,
   })
   
   await Account.create({
    userId: newUser._id,
    balance: accountBalance
  });
  

   const token = jwt.sign({ userName: newUser.userName, id: newUser._id }, JWT_SECRET);

   if(newUser.gender == 'male'){
   res.json({
    message:`Signed Up successfully Mr.${newUser.firstName}`,
     Balance:accountBalance ,token
   })
}else if(newUser.gender == 'female'){
    res.json({
    message: `Signed Up successfully Ms.${newUser.firstName}`,
    Balance:accountBalance,
    token
})
}else{
    res.json({
    message: `Signed Up successfully ${newUser.firstName}`,
    Balance:accountBalance,
    token
})
}
})


router.post('/signin' , async(req,res)=>{
   const Payload = req.body;
   if (!Payload.userName || !Payload.password) {
    return res.status(400).json({ error: "Username and password are required." });
    }
    const ParsePayLoad = signin.safeParse(Payload);
    if (!ParsePayLoad.success) {
      return res.status(400).json({message:"Password is too short"});
    }
    

    const user = await User.findOne({ userName: Payload.userName});
    if(!user){
        return res.status(411).json({ error: "Invalid username" });
    }
    const hashedPassword = await bcrypt.compare(Payload.password, user.password);
    if(!hashedPassword){
        return res.status(411).json({ error: "Invalid username or password." });
    }
    const token = jwt.sign({ userId: user._id }, JWT_SECRET);

    res.status(200).json({
      message: `Welcome back! ${user.gender === 'male' ? 'Mr.' : user.gender === 'female' ? 'Ms.' : ''}${user.firstName}`,
      token
    });
})

router.put('/update', authMiddleware,async (req, res) => {

    const payload = req.body;
    const parsePayload = updateData.safeParse(payload);
  
    if (!parsePayload.success) {
      return res.status(400).json({ message: "Invalid input data." });
    }
  
    if (payload.password) {
        payload.password = await bcrypt.hash(payload.password, 10);
      }

      const UpdateData = await User.updateOne({ _id: req.userId }, { $set: payload });
      if(!UpdateData){
        res.status(411).json({
            message: "Error while updating information"
        })
      }
      const updatedUser = await User.findById(req.userId).select('-password');

      res.json({
        message: "User updated successfully",
        updatedUser
      });
  });

  router.get('/user', authMiddleware, async (req, res) => {
    try {
      const user = await User.findById(req.userId).select('-password');
      const account = await Account.findOne({ userId: req.userId });
  
      if (!user || !account) {
        return res.status(404).json({ message: "User not found" });
      }
     
      res.json({
        firstName: user.firstName,
        lastName: user.lastName,
        userName: user.userName,
        gender: user.gender,
        balance: account.balance
      });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  });
  

  router.get('/bulk', authMiddleware, async (req, res) => {
    const filter = req.query.filter || "";
  
    const users = await User.find({
      $or: [
        { firstName: { $regex: filter, $options: "i" } },
        { lastName: { $regex: filter, $options: "i" } }
      ]
    }).select("firstName lastName userName _id");
  
    res.status(200).json({
      users
    });
  });
  

  module.exports = router;
