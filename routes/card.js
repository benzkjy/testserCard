const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Load Card model
const Card = require('../models/card');

//route #Get /card/test
//public
router.get("/test",(req,res)=>res.json({msg:"Hi test route card"}));

//route #Get /card/
//public
router.get("/",(req,res)=>{
    Card.find()
    .sort({ data: -1 })
    .then(posts => res.json(posts))
    .catch(err =>
      res.status(404).json({
        nocardfound: " No card found"
      })
    );
});

//route #POST /card
//public
router.post("/", (req,res)=>{
    const newCard = new Card({
        name: req.body.name,
        status: req.body.status,
        content: req.body.content,
        category: req.body.category,
        author: req.body.author
    });

    newCard
        .save()
        .then(card => res.json(card))
        .catch(err => res.json(err));
});

//route #POST /card/edit
//public
router.post("/edit", (req,res)=>{
    const editCard = new Card({
        name: req.body.name,
        status: req.body.status,
        content: req.body.content,
        category: req.body.category,
        author: req.body.author
    });

    Card.findById(req.param.id)
            .then(card => {
                if(card.author.toString() != req.body.author){
                    return res.status(401).json({notauthorized: "You not authorized"});
                }
                newCard
                    .save()
                    .then(card => res.json(card))
                    .catch(err => res.json(err));
            })
            // .catch(err => res.json(err));
            .catch(err => res.status(404).json({ postnotfound: "No post found" }));

});

//route #DELETE /card/:id
//private
router.delete(
    '/:id', (req,res) => {
        Card.findById(req.param.id)
            .then(card => {
                if(card.author.toString() != req.body.author){
                    return res.status(401).json({notauthorized: "You not authorized"});
                }
                card.remove().then(() => res.json({ success: true }));
            })
            // .catch(err => res.json(err));
            .catch(err => res.status(404).json({ postnotfound: "No post found" }));
    }
);

module.exports = router;