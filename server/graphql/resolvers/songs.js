const Playlist = require("../../models/playlist")
const checkAuth = require("../../util/check-auth")

const { UserInputError, AuthenticationError } = require("apollo-server")

module.exports = {
    Mutation: {
        async addSong(_, { playlistId, link, title }, context) {
            const user = checkAuth(context)
            if (link.trim() === "") {
                throw new UserInputError("Empty input", {
                    errors: {
                        link: "Missing/Invalid link",
                    },
                })
            }

            const playlist = await Playlist.findById(playlistId)

            if (playlist) {
                playlist.songs.unshift({
                    title,
                    link,
                    addedOn: new Date().toISOString(),
                    username: user.username,
                })
                await playlist.save()
                return playlist
            } else throw new UserInputError("Playlist not found")
        },
        async removeSong(_, { playlistId, songId }, context) {
            const user = checkAuth(context)

            const playlist = await Playlist.findById(playlistId)

            if (playlist) {
                const songIndex = playlist.songs.findIndex(
                    (s) => s.id === songId
                )
                if (playlist.songs[songIndex].username === user.username) {
                    playlist.songs.splice(songIndex, 1)
                    await playlist.save()
                    return playlist
                } else {
                    throw new AuthenticationError("Action not allowed")
                }
            } else {
                throw new UserInputError("Playlist not found")
            }
        },
    },
}
