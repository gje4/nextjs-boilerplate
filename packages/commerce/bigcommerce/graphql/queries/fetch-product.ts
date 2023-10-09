import { fetchGraphQL } from '../../../fetchers/fetch-graphql'
import { getProductByIdQuery } from './fetch-product.graphql'



export const  getProductById = async (productId: number): Promise<any> => {
    try {
        const vars = {
            entityId: Number(productId),
        }

        const result = await fetchGraphQL(getProductByIdQuery, vars)
        console.log("result", result)

        const product = result.data.site.product
        console.log("product", product)

        if (product) {
            return product
        } else {
            return null
        }
    } catch (e) {
        console.log("e", e)
        return null
    }
}

export default getProductById
