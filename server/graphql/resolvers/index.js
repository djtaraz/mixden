const playlistsResolvers = require("./playlists")
const usersResolvers = require("./users")
const songsResolvers = require("./songs")

module.exports = {
    Query: {
        ...playlistsResolvers.Query,
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...playlistsResolvers.Mutation,
        ...songsResolvers.Mutation,
    },
}
