const router = require('express').Router();

const {
    getAllUsers,
    getUserByID,
    addNewUser
} = require('../../controllers/userController.js');

router.route('/')
    .get(getAllUsers)
    .post(addNewUser);

router.route('/:id')
    .get(getUserByID)



module.exports= router;