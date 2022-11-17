const router = require('express').Router();

const {
    getUsers,
    getUserByID,
    addNewUser,
    updateUser,
    deleteUser,
    addNewFriend,
    deleteFriend,
} = require('../../controllers/userController.js');

router.route('/')
    .get(getUsers)
    .post(addNewUser);

router.route('/:id')
    .get(getUserByID)
    .put(updateUser)
    .delete(deleteUser)

router.route('/:id/friends/:friendId').post(addNewFriend).delete(deleteFriend)



module.exports= router;