//Query from BigCommerce playground https://developer.bigcommerce.com/graphql-storefront/playground
export const getProductByIdQuery = /* GraphQL */ `
  query getProductById($entityId: Int!) {
  site {
      product(entityId: $entityId) {
        id
        entityId
        name
         plainTextDescription
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
`
