export const fetchAllProductQuery = /* GraphQL */ `
  query fetchAllProductPaths($first: Int = 25, $after: String) {
    site {
      products(first: $first, after: $after) {
        pageInfo {
          startCursor
          hasNextPage
          endCursor
        }
        edges {
          node {
            entityId
            path
            id
            name
            defaultImage {
              urlOriginal
            }
            prices {
              price {
              value
                currencyCode
              }
            }
          }
        }
      }
    }
  }
`
