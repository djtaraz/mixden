const { model, Schema } = require("mongoose")

const mixSchema = new Schema({
    title: String,
    addedOn: String,
    username: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
    songs: [
        {
            title: String,
            link: String,
            addedOn: String,
            username: String,
        },
    ],
})

module.exports = model("Mix", mixSchema)
