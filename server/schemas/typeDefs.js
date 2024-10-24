const typeDefs = `
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        bookCount: Int
        savedBooks: [Book]
  }
    type Book {
        bookId: Int!
        authors: [String]
        description: String!
        title: String!
        image: String
        link: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User

    }
    input BookInput {
        bookId: Int!
        authors: [String]
        description: String!
        title: String!
        image: String
        link: String
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: BookInput): User
        removeBook(bookId: Int!): User
    }
`;

module.exports = typeDefs;
