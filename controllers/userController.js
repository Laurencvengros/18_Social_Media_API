const User = require('../models/User');

module.exports = {
    getUsers(req, res) {
        User.find({})
          .then((users) => res.json(users))
          .catch((err) => res.status(500).json(err));
      },
    addNewUser(req, res) {
        User.create(req.body)
        .then(userData => res.json(userData))
        .catch(err => res.status(400).json(err));
    },
    getUserByID(req,res){
        User.findOne({_id:req.params.id})
        .populate({path: 'thoughts', select: '-__v'})
        .populate({path: 'friends', select: '-__v'})
        .then((userData) =>
            !userData
              ? res.status(404).json({message: 'no user with that ID'})
              : res.json(userData)
        )
        .catch((err) => res.status(500).json(err));
    },

};

