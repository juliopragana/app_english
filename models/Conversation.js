const mongooose = require("mongoose");

const Conversation = new mongooose.Schema({
    title: String,
    questions: {
        titles : [],
        audios : []
    },
    responses: {
        titles : []
    }
})

module.exports = Conversation;