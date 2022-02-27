const express = require("express")
const Conn = require("./db/connection.js")
const {ApolloServer} = require("apollo-server-express")
const typeDefs = require('./graphql/TypeDefs')
const resolvers = require('./graphql/Resolver')

Conn()


//Server Start basic structure for appoloserver with graphql

const startserver = async()=>{
    //defing app
    const app = express()
    //ApolloServer is required from apollo-server-express
    const apolloServer = new ApolloServer({
          typeDefs : typeDefs,
          resolvers : resolvers
    })

    //Starting the apollo server
    await apolloServer.start()
    // applying middleware in which we will define path
    apolloServer.applyMiddleware({app : app , path:"/graphql"})
    //lising to port
    app.listen(4000 ,()=>{
        console.log("App is running on port 4000")
    })
    
}

//calling the startServer

startserver()


