const router = require('express').Router();

const {
    getUsers,
    addNewUser,
    getUserByID,
    updateUser,
    deleteUser,
    addNewFriend,
    deleteFriend,
    } = require('../../controllers/userController');

router.route('/').get(getUsers).post(addNewUser);

router.route('/:id').get(getUserByID)
    .put(updateUser)
    .delete(deleteUser)

router.route('/:id/friends/:friendId')
.post(addNewFriend)
.delete(deleteFriend)



module.exports= router;