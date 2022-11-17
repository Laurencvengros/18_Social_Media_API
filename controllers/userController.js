const User = require('../models/User');

module.exports = {
    getUsers(req, res) {
        User.find()
          .then((users) => res.json(users))
          .catch((err) => res.status(500).json(err));
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

    addNewUser(req,res){
        User.create(req.body)
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
    updateUser(req,res){
        User.findOneAndUpdate(
            {_id: req.params.id},
            { $set: req.body },
            {runValidators: true, new:true}
        )
        .then((userData) =>
          !userData
            ? res.status(404).json({message: 'Sorry! No user with that ID'})
            : res.json(userData)
        )
        .catch((err) => res.status(500).json(err));
    },
    deleteUser(req,res){
        User.findOneAndDelete(
            {_id: req.params.id},
            { $pull: { thought: { thoughtId: req.params.thoughtId } } },
            {runValidators: true, returnOriginal: false}
        )
        .then((userData) =>
          !userData
            ? res.status(404).json({message: "No user to delete!"})
            : res.json(userData)
        )
        .catch((err) => res.status(500).json(err));
    },
    addNewFriend(req,res){
        User.findOneAndUpdate(
            {id: req.params.id},
            {$push: {friend: req.params.friendId}},
            {new: true}
        )
        .populate({path: 'friend', select: '-__v'})
        .select('-__v')
        .then((userData) =>
          !userData
            ? res.status(404).json({message: 'no user with this ID!'})
            : res.json(userData)
        )
        .catch((err) => res.status(500).json(err));
    },
    deleteFriend(req,res){
        User.findOneAndDelete(
            {_id: req.params.id},
            {$pull: {friend: req.params.friendId}},
            {new: true}
        )
        .populate({path: 'friend', select: '-__v'})
        .select('-__v')
        .then((userData) =>
          !userData
            ? res.status(404).json({message: 'no user with that id!'})
            :res.json(userData)
        )
        .catch((err) => res.status(500).json(err));
    }
};

