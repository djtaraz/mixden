const { gql } = require("apollo-server")

//TODO: implement maybe? songs: [Song!]! to add atleast one song to mix before creation?

module.exports = gql`
    type Mix {
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
        getMixes: [Mix]
        getMix(mixId: ID!): Mix
    }
    type Mutation {
        register(registerInput: RegisterInput): User!
        login(username: String!, password: String!): User!
        createMix(title: String!): Mix!
        deleteMix(mixId: ID!): String!
        addSong(mixId: String!, link: String!, title: String): Mix!
        removeSong(mixId: String!, songId: String!): Mix!
    }
`
