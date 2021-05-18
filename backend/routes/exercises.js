const express = require('express');
const router = express.Router();
const Exercise = require('../models/exercise.model');

router.get('/',(req,res)=>{
    Exercise.find({},(err,exercises)=>{
        if(err){
            res.status(400).json('Error: '+ err);
        }else{
            res.json(exercises);
        }
    })
});

router.post('/add',(req,res)=>{

    const newExercise = new Exercise({
        username: req.body.username,
        description: req.body.description,
        duration: Number(req.body.duration),
        date: Date.parse(req.body.date) 
    });
    newExercise.save((err)=>{
        if(err){
            res.status(400).json('Error: '+ err);
        }else{
            res.json('Exercise added!');
        }
    });
});

router.get('/:id',(req,res)=>{
    Exercise.findById(req.params.id,(err,exercise)=>{
        if(err){
            res.status(400).json('Error: '+ err);
        }else{
            res.json(exercise);
        }
    })
});

router.delete('/:id',(req,res)=>{
    Exercise.findByIdAndDelete(req.params.id,(err)=>{
        if(err){
            res.status(400).json('Error: '+err);
        }else{
            res.json('Exercise deleted');
        }
    })
});

router.post('/update/:id',(req,res)=>{
    Exercise.findById(req.params.id,(err,exercise)=>{
        if(err){
            res.status(400).json('Error: '+ err);
        }else{
            exercise.username = req.body.username,
            exercise.description = req.body.description,
            exercise.duration = Number(req.body.duration),
            exercise.date = Date.parse(req.body.date)

            exercise.save((err)=>{
                if(err){
                    res.status(400).json('Error: '+ err);
                }else{
                    res.json('Exercise updated')
                }
            })
        }
    });
});


module.exports = router;