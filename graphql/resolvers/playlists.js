const Playlist = require("../../models/playlist")
const checkAuth = require("../../util/check-auth")

module.exports = {
    Query: {
        async getPlaylists() {
            try {
                let playlists = await Playlist.find()
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
        async createPlaylist(_, { songName }, context) {
            const user = checkAuth(context)
            console.log(user)

            // const newPlaylist = new Playlist({
            //     songName,
            //     user: user.id,
            //     username: user.username,
            //     addedOn: new Date().toISOString(),
            // })

            // const playlist = await newPlaylist.save()

            // return playlist
        },
    },
}
