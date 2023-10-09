import {fetchGraphQL} from '../../../fetchers/fetch-graphql'
import {fetchAllProductQuery} from './fetch-all-product.graphql'


type Product = { node: {name: string, entityId: string, path: string,defaultImage: {urlOriginal: string} } }

export type Products = [Product]

export const fetchProducts = async (): Promise<Products> => {
  try {
    const res = await fetchGraphQL(fetchAllProductQuery,)
    return res.data.site.products.edges.map((product: Product) => {
        return {
          name: product.node.name,
          entityId: product.node.entityId,
          path: product.node.path,
          image: product.node.defaultImage.urlOriginal
        }
      })
  } catch (e) {
    throw e
  }
}
