import { notFound } from 'next/navigation';
import {Suspense} from "react";
import getProductById from "@/packages/commerce/bigcommerce/graphql/queries/fetch-product";
import {ProductView} from "@/components/ProductView";


export default async function Product({
                                          params
                                      }: {
    params: { slug: string };
}) {
    const productId = Number(params.slug);
    const product= await getProductById(productId)

    if (!product) {
        return notFound();
    }
    return (
    <Suspense fallback={<p>Loading…</p>}>
         <ProductView product={product}/>
    </Suspense>
    );
}


export const runtime = 'edge';
