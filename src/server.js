// const express = require("express") // OLD IMPORT SYNTAX
import express from "express" // NEW IMPORT SYNTAX (do not forget to add type: "module" to package.json to use this!!)
import listEndpoints from "express-list-endpoints"
import authorsRouter from "./api/authors/index.js"

const server = express()

const port = 3001

server.use(express.json()) // If you do not add this line here BEFORE the endpoints, all req.body will be UNDEFINED

// ****************** ENDPOINTS *********************
server.use("/authors", authorsRouter) // All users related endpoints will share the same /users prefix in their urls

server.listen(port, () => {
  console.table(listEndpoints(server))
  console.log("Server is running on port:", port)
})