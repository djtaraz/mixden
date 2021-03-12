const { gql } = require("apollo-server")

module.exports = gql`
    type Playlist {
        id: ID!
        songName: String!
        songLink: String!
        addedOn: String!
    }
    type User {
        id: ID!
        email: String!
        token: String!
        username: String!
        createdAt: String!
    }
    input RegisterInput {
        username: String!
        email: String!
        password: String!
        confirmPassword: String!
    }
    type Query {
        getPlaylists: [Playlist]
        getPlaylist(playlistId: ID!): Playlist
    }
    type Mutation {
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
        createPlaylist(songName: String!): Playlist!
        deletePlaylist(playlistId: ID!): String!
    }
`
