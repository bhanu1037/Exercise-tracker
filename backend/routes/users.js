const express = require('express');
const router = express.Router();
const User = require('../models/user.model');

router.get('/',(req,res)=>{
    User.find({},(err,users)=>{
        if(err){
            res.status(400).json('Error: '+ err);
        }else{
            res.json(users);
        }
    })
});

router.post('/add',(req,res)=>{

    const newUser = new User({username: req.body.username});
    newUser.save((err)=>{
        if(err){
            res.status(400).json('Error: '+ err);
        }else{
            res.json('User added!');
        }
    });
});



module.exports = router;