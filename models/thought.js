const mongoose = require('mongoose');

// Define the schema for the 'Thought' model
const thoughtSchema = new mongoose.Schema({
    message: {
        type: String,
        required: [true, 'Please write a happy thought'],
        minlength: [1, 'The message must be at least 1 character long'],
        maxlength: [140, 'Oups, too long, the message cannot be more than 140 characters']
    },
    hearts: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        // Prevents createdAt from being set through input
        immutable: true
    }
});

module.exports = mongoose.model('thought', thoughtSchema);