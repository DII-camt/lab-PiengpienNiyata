const { buildSchema } = require('graphql'); 
 
const schema = buildSchema(` 
  type User { 
    id: ID! 
    name: String! 
  } 
 
  type Query { 
    getUsers: [User] 
    getUsers_by_name(name: String!): [User] 
  } 
 
`); 
 
module.exports = schema;