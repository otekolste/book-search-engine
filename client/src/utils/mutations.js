import { gql } from "@apollo/client";

export const REMOVE_BOOK = gql`
  mutation Mutation($bookId: Int!) {
    removeBook(bookId: $bookId) {
      username
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
      _id
    }
  }
`;
