const { model, Schema } = require("mongoose")

const playlistSchema = new Schema({
    songName: String,
    songLink: String,
    addedOn: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "users",
    },
})

module.exports = model("Playlist", playlistSchema)
