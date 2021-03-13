const { ApolloServer } = require("apollo-server")
const mongoose = require("mongoose")
require("dotenv").config()

const typeDefs = require("./graphql/typeDefs")
const resolvers = require("./graphql/resolvers")

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req }),
})

mongoose
    .connect(
        `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@cluster0.tjjts.mongodb.net/allurmusicdb?retryWrites=true&`,
        { useNewUrlParser: true }
    )
    .then(() => {
        console.log("mongo connected")
        return server.listen({ port: 3000 })
    })
