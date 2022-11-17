const router = require('express').Router();

const {
    getThoughts,
    addThought,
    getThoughtByID,
    updateThought,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(addThought);

router.route('/:id').get(getThoughtByID).put(updateThought);

module.exports = router;