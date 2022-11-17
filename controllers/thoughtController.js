const {Thought, User} = require('../models');

module.exports = {
    getThoughts(req,res){
        Thought.find({})
        .then(thought => res.json(thought))
        .catch((err) => res.status(500).json(err));
    },

    addThought(req, res) {
        Thought.create(req.body)
        .then(thoughtData =>{
            User.findOneAndUpdate(
                {_id: req.params._id},
                {$addToSet: {thought: req.body}},
                { runValidators: true, new: true },
                console.log(thoughtData)
            )
            .then((thoughtData) =>
            !thoughtData
                ? res.status(404).json({ message: 'No User found with that ID :(' })
                : res.json(thoughtData)
            )
            .catch(err => res.json(err));
        })
        .catch(err => res.status(400).json(err));
       
    },

    getThoughtByID(req,res){
        Thought.findOne({_id: req.params.id})
        .populate({path: 'reaction',select: '-__v'})
        .select('-__v')
        .then((thoughtData) =>
            !thoughtData    
                ? res.status(404).json({message: 'no thought with that ID!'})
                : res.json(thoughtData)
        )
        .catch((err) => res.status(500).json(err));

    },
    updateThought(req,res){
        Thought.findOneAndUpdate(
            {_id: req.params.id},
            { $set: req.body},
            {runValidators: true, new:true}
        )
        .then((thoughtData) =>
            !thoughtData
                ? res.status(404).json({message: 'no thought to update!'})
                : res.json(thoughtData)
        )
        .catch((err) => res.status(500).json(err));

    }
};