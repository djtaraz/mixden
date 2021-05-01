import React from "react"
import ApolloClient from "apollo-client"
import { InMemoryCache } from "apollo-cache-inmemory"
import { createHttpLink } from "apollo-link-http"
import { ApolloProvider } from "@apollo/react-hooks"
import fetch from "isomorphic-fetch"
import Layout from "./src/components/layout"

const httpLink = createHttpLink({
    uri: "http://localhost:3000",
    fetch,
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

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>
}
