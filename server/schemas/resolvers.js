const { User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args) => {
      return null;
    },
  },
  Mutation: {
    login: async (parent, args) => {
      return null;
    },
    addUser: async (parent, args) => {
      return null;
    },
    saveBook: async (parent, args) => {
      return null;
    },
    removeBook: async (parent, args) => {
      return null;
    },
  },
};

module.exports = resolvers;
