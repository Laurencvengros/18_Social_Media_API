const router = require('express').Router();

const {
    getAllUsers,
    getUserByID,
    addNewUser,
    updateUser,
    deleteUser,
} = require('../../controllers/userController.js');

router.route('/')
    .get(getAllUsers)
    .post(addNewUser);

router.route('/:id')
    .get(getUserByID)
    .put(updateUser)
    .delete(deleteUser)



module.exports= router;