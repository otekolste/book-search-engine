const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      // Query to get all of an user's saved books
      if (context.user) {
        // Gets logged in user from context
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
  },
  Mutation: {
    // Mutation to log user in
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email }); // Searches for user in database with the corresponding email

      if (!user) {
        // If that user doesn't exist, throw error
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password); // Check if the stored password matches inputted password

      if (!correctPw) {
        // If password is incorrect, throw error
        throw AuthenticationError;
      }

      const token = signToken(user); // Signs the payload into JWT payload
      return { token, user };
    },
    addUser: async (parent, { username, email, password }) => {
      // Mutation to create a new user
      const user = await User.create({ username, email, password }); // Creates user in database with given information
      const token = signToken(user); // Signs the payload into JWT payload

      return { token, user };
    },
    saveBook: async (parent, { input }, context) => {
      // Mutation to save a book to an user's savedBooks field
      if (context.user) {
        // Get logged in user from context
        return User.findOneAndUpdate(
          // Find corresponding user in the database and update their savedBooks array
          { _id: context.user._id },
          { $addToSet: { savedBooks: input } },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
    removeBook: async (parent, { bookId }, context) => {
      // Mutation to remove a book from an user's savedBooks field
      if (context.user) {
        // Get logged in user from context
        return User.findOneAndUpdate(
          // Find corresponding user in the database and update their savedBooks array
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId: bookId } } },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
