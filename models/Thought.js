const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
     thoughtText: {
        type: String,
        required: true,
        min_length: 1,
        max_length: 280,
     },
     createdAt: {
        type: Date,
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a'),
     },
     username: {
        type: String,
        required: true,
     },
     reactions: [reactionSchema]
    },
    {
      toJSON: {
        virtuals: true,
        getters: true,
      },
      id: false,
    }
);

thoughtSchema.virtual('reactionCount').get(function(){
    return this.reactions.length;
});