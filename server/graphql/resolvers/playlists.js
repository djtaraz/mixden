const Playlist = require("../../models/playlist")
const checkAuth = require("../../util/check-auth")

const { AuthenticationError } = require("apollo-server")

module.exports = {
    Query: {
        async getPlaylists() {
            try {
                let playlists = await Playlist.find().sort({ addedOn: -1 })
                return playlists
            } catch (err) {
                throw new Error(err)
            }
        },
        async getPlaylist(_, { playlistId }) {
            try {
                const playlist = await Playlist.findById(playlistId)
                if (playlist) {
                    return playlist
                } else {
                    throw new Error("Playlist not found")
                }
            } catch (err) {
                throw new Error(err)
            }
        },
    },
    Mutation: {
        async createPlaylist(_, { title }, context) {
            const user = checkAuth(context)
            //console.log(user)

            if (args.title.trim() === "") {
                throw new Error("Playlist must have a title")
            }

            const newPlaylist = new Playlist({
                title,
                user: user.id,
                username: user.username,
                addedOn: new Date().toISOString(),
            })

            const playlist = await newPlaylist.save()

            return playlist
        },
        async deletePlaylist(_, { playlistId }, context) {
            const user = checkAuth(context)
            //console.log(user)

            try {
                const playlist = await Playlist.findById(playlistId)
                if (user.username === playlist.username) {
                    await playlist.delete()
                    return "Playlist deleted successfully"
                } else {
                    throw new AuthenticationError("Action not allowed")
                }
            } catch (err) {
                throw new Error(err)
            }
        },
    },
}
