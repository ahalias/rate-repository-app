import { gql } from '@apollo/client';
import { REPO_DETAILS } from './fragments';

export const GET_REPOSITORIES = gql`
query getRepositories {
  repositories {
    edges {
      node {
        ...RepositoriesDetails
    }
  }
}
}
${REPO_DETAILS}
`;


export const GET_ME = gql `
query getMe {
    me {
      id
      username
    }
  }
`