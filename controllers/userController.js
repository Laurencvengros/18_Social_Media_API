const {User, Thought} = require('../models');

module.exports = {
    getUsers(req, res) {
        User.find({})
        .populate({path: 'friend', select: '-__v'})
        .populate({path: 'thought', select: '-__v'})
          .then(users => res.json(users))
          .catch((err) => res.status(500).json(err));
      },
    addNewUser(req, res) {
        User.create(req.body)
        .then(userData => res.json(userData))
        .catch(err => res.status(400).json(err));
    },
    getUserByID(req,res){
        User.findOne({_id:req.params.id})
        .select("-__v")
        .populate("friend")
        .populate("thought")
        .then((userData) =>
            !userData
              ? res.status(404).json({message: 'no user with that ID'})
              : res.json(userData)
        )
        .catch((err) => res.status(500).json(err));
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
    deleteUser(req, res) {
        User.findOneAndRemove(
            { _id: req.params.id },
            {runValidators: true, returnOriginal: false}
        )
        .then((userData) => {
            if (!userData) {
                return res.status(404).json({ message: "No user with this id!" });
        }
        return Thought.deleteMany({ _id: { $in: userData.thought } });
    })
    .then(() => {
      res.json({ message: "User and associated thoughts deleted!" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });

    },
    addNewFriend(req,res){
        User.findOneAndUpdate(
            {_id: req.params.id},
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
        User.findOneAndUpdate(
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

