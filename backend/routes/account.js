const express = require("express");
const router = express.Router();
const {authMiddleware} = require("../middleware");
const{Account, User} = require("../db");
const { default: mongoose } = require("mongoose");

router.get('/balance', authMiddleware, async (req, res) => {
    try {
      const userAccount = await Account.findOne({ userId: req.userId });
  
      if (!userAccount) {
        return res.status(404).json({ message: "Account not found." });
      }
  
      res.status(200).json({
        balance: userAccount.balance
      });
    } catch (err) {
      res.status(500).json({ message: "Server error" });
    }
  });

  router.post('/transfer' ,authMiddleware,async(req,res)=>{
    const session = await mongoose.startSession();
    session.startTransaction();
    const{to,amount} = req.body;

    try {
        const account = await Account.findOne({ userId: req.userId }).session(session);
    
        if (!account || account.balance < amount) {
          await session.abortTransaction();
          await session.endSession();
          return res.status(400).json({ message: "Insufficient Balance" });
        }
    
        const toUser = await User.findById(to);
        console.log("TO USER",toUser);
        
        if (!toUser) {
            await session.abortTransaction();
            await session.endSession();
            return res.status(400).json({ message: "User not found" });
        }

        const toAccount = await Account.findOne({ userId: toUser._id }).session(session);
        console.log("TO ACCOUNT", toAccount);
    
        if (!toAccount) {
          await session.abortTransaction();
          await session.endSession();
          return res.status(400).json({ message: "Invalid recipient account" });
        }
    
        await Account.updateOne(
          { userId: req.userId },
          { $inc: { balance: -amount } }
        ).session(session);
    
        await Account.updateOne(
          { userId: toUser._id },
          { $inc: { balance: amount } }
        ).session(session);
    
        await session.commitTransaction();
        await session.endSession();
    
        res.json({ message: "Transaction successful" });
      } catch (err) {
        await session.abortTransaction();
        await session.endSession();
        res.status(500).json({ message: "Internal server error", error: err.message });
      }
    })
 
  
  module.exports = router;