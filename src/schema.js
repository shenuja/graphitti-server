const { gql } = require('apollo-server');

const schema = gql `
  type Query {
    allProjects: [Project!]!
    project(id: ID!): Project
    projectByLocation(location: String!): [Project]!
  }

  type Mutation {
    createProject(name: String!,location: String!): Project!
  }

  type Project{
    id: ID!
    name: String!
    location: String!
  }
<<<<<<< HEAD

=======
>>>>>>> ac489feb350570fbf29ac1c210ef6a1d481f2f70
`

module.exports = schema
