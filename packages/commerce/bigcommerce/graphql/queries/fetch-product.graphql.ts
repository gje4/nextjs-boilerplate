//Query from BigCommerce playground https://developer.bigcommerce.com/graphql-storefront/playground?
export const getProductByIdQuery = /* GraphQL */ `
  query getProductById($entityId: Int!) {
    site {
      product(entityId: $entityId) {
        ...productInfo
        ...variantsInfo
      }
    }
  }
  
  
  fragment productInfo on Product {
    entityId
    id
    name
    path
    sku
    brand {
      name
      path
    }

    description
    prices {
      ...productPrices
    }

    images {
      edges {
        node {
          ...productImage
        }
      }
    }
  }
  
    fragment productPrices on Prices {
    price {
      value
      currencyCode
    }
    salePrice {
      value
      currencyCode
    }
    retailPrice {
      value
      currencyCode
    }
  }


`
