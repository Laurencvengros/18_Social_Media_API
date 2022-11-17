const router = require('express').Router();

const {
    getThoughts,
    addThought,
    getThoughtByID,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction,
} = require('../../controllers/thoughtController');

router.route('/').get(getThoughts).post(addThought);

router.route('/:id')
.get(getThoughtByID)
.put(updateThought)
.delete(deleteThought)

router.route('/:thoughtId/reactions').post(addReaction).delete(deleteReaction)

module.exports = router;