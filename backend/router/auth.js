const express = require('express');
const router = express.Router();
const UserInfo = require('../models/User');

router.post('/signup', async (req,res)=>{
    const user = new UserInfo({
        name: req.body.name,
        mobileno: req.body.mobileno,
        email: req.body.email,
        password: req.body.password,
    })
    const data = await user.save();
    if(data){
        res.status(200).send({data: data, message: `Hello ${user.name} You Registered!!`});
    }
    else{
        res.status(202).send({message: `Erroe Occured!`});
    }

});

router.post('/login', async (req,res)=>{

    console.log(req.body);
    const user = await UserInfo.findOne({email:req.body.email});
    if(user){
        if(user.password === req.body.password){
            res.send({user : user, message : `Hello, ${user.name} You logged in successfully!`});
        }else{
            res.send({message : "Invalid Password"});
        }
    }else{
        res.send({message : "User Not Found!"});
    }

});

module.exports = router;