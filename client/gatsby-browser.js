import React from "react"
import ApolloClient from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"
import { ApolloProvider } from "@apollo/react-hooks"

const httpLink = createHttpLink({
    uri: "http://localhost:3000",
})

// const authLink = setContext(() => {
//     const token = localStorage.getItem("jwtToken")
//     return {
//         headers: {
//             Authorization: token ? `Bearer ${token}` : "",
//         },
//     }
// })

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
})

export const wrapRootElement = ({ element }) => {
    return <ApolloProvider client={client}>{element}</ApolloProvider>
}
