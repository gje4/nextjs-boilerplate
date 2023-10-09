import { notFound } from 'next/navigation';
import getProductById from "@/packages/commerce/bigcommerce/graphql/queries/fetch-product";


export default async function Product({
                                          params
                                      }: {
    params: { slug: string };
}) {
    const productId = Number(params.slug);
    console.log("productId", productId)

    const product= await getProductById(productId)
    console.log("products pdp", product)

    if (!product) {
        return notFound();
    }

    return (
        <div className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>
                            <div className="flex mb-4">

                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">

          </span>
                            </div>
                            <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">


                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-gray-900">$58.00</span>
                                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Button</button>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    );
}

