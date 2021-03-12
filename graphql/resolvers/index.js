const postsResolvers = require("./playlists")
const usersResolvers = require("./users")

module.exports = {
    Query: {
        ...postsResolvers.Query,
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...postsResolvers.Mutation,
    },
}
