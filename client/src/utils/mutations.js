import { gql } from "@apollo/client";

export const REMOVE_BOOK = gql`
  mutation RemoveBook($bookId: String!) {
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

export const SAVE_BOOK = gql`
  mutation SaveBook($input: BookInput!) {
    saveBook(input: $input) {
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
