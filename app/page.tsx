import {getAllEntries} from '@/packages/cms/contentstack/entries'
import {fetchProducts} from '@/packages/commerce/bigcommerce/graphql/queries/fetch-products'
import {ProductCard} from "@/components/ProductCard";
import {Hero} from "@/components/Hero";
import {Suspense} from "react";



export default async function Home() {
    const homeContent = await getAllEntries("home")
    const products= await fetchProducts()
    return (
        <div>
                    <Suspense>
                <Hero content={homeContent}/>
                    </Suspense>
            <div className="font-bold text-center">
                <h1>Products from Commerce</h1>
            </div>
                <div className="grid grid-cols-3 gap-4 pt-10 justify-items-center">
                    <Suspense>
                    {products?.map((product: any) => (
                        <ProductCard key={product.entityId} product={product}/>
                    ))}
                    </Suspense>
                </div>
        </div>

    )
}
