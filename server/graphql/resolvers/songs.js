const Mix = require("../../models/mix")
const checkAuth = require("../../util/check-auth")

const { UserInputError, AuthenticationError } = require("apollo-server")

module.exports = {
    Mutation: {
        async addSong(_, { mixId, link, title }, context) {
            const user = checkAuth(context)
            if (link.trim() === "") {
                throw new UserInputError("Empty input", {
                    errors: {
                        link: "Missing/Invalid link",
                    },
                })
            }

            const mix = await Mix.findById(mixId)

            if (mix) {
                mix.songs.unshift({
                    title,
                    link,
                    addedOn: new Date().toISOString(),
                    username: user.username,
                })
                await mix.save()
                return mix
            } else throw new UserInputError("Mix not found")
        },
        async removeSong(_, { mixId, songId }, context) {
            const user = checkAuth(context)

            const mix = await Mix.findById(mixId)

            if (mix) {
                const songIndex = mix.songs.findIndex((s) => s.id === songId)
                if (mix.songs[songIndex].username === user.username) {
                    mix.songs.splice(songIndex, 1)
                    await mix.save()
                    return mix
                } else {
                    throw new AuthenticationError("Action not allowed")
                }
            } else {
                throw new UserInputError("Mix not found")
            }
        },
    },
}
