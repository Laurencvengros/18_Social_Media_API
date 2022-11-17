const router = require('express').Router();

const {
    getThoughts,
    addThought
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(addThought);

module.exports = router;