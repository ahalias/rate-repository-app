import { gql } from '@apollo/client';



export const REPO_DETAILS = gql `fragment RepositoriesDetails on Repository {
          id
          name
          ownerName
          createdAt
          fullName
          reviewCount
          ratingAverage
          forksCount
          stargazersCount
          description
          language
          ownerAvatarUrl
}
`