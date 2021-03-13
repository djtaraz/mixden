const { gql } = require("apollo-server")

//TODO: implement maybe? songs: [Song!]! to add atleast one song to playlist before creation?

module.exports = gql`
    type Playlist {
        id: ID!
        title: String!
        addedOn: String!
        username: String!
        songs: [Song]!
    }
    type Song {
        id: ID!
        title: String!
        link: String!
        addedOn: String!
        username: String!
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
        createPlaylist(title: String!): Playlist!
        deletePlaylist(playlistId: ID!): String!
        addSong(playlistId: String!, link: String!, title: String): Playlist!
        removeSong(playlistId: String!, songId: String!): Playlist!
    }
`
