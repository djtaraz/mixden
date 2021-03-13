const mixesResolvers = require("./mixes")
const usersResolvers = require("./users")
const songsResolvers = require("./songs")

module.exports = {
    Query: {
        ...mixesResolvers.Query,
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...mixesResolvers.Mutation,
        ...songsResolvers.Mutation,
    },
}
