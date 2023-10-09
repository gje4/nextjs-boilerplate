import { fetchGraphQL } from '../../../fetchers/fetch-graphql'
import { getProductByIdQuery } from './fetch-product.graphql'



export const  getProductById = async (productId: number): Promise<any> => {
    try {
        const vars = {
            entityId: Number(productId),
        }

        const result = await fetchGraphQL(getProductByIdQuery, vars)
        const product = result.data.site.product

        if (product) {
            return product
        } else {
            return null
        }
    } catch (e) {
        return null
    }
}

export default getProductById
