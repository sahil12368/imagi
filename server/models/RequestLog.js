const mongoose = require('mongoose');

const requestLogSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    endpoint: {
        type: String,
        required: true,
    },
    provider: {
        type: String,
        required: true,
    },
    tokensCost: {
        type: Number,
        required: true,
    },
    prompt: {
        type: String, // Optional: store prompt for auditing
    },
}, {
    timestamps: true,
});

const RequestLog = mongoose.model('RequestLog', requestLogSchema);

module.exports = RequestLog;
