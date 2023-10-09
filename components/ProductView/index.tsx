import Image from 'next/image';

interface ProductViewProps {
    product: productContent;
}

interface productContent {
    entityId: string,
    name: string,
    image: string,
    plainTextDescription: string
    defaultImage: {
        urlOriginal: string
    }
    prices: {
        price: {
            value: string
        }
    }
}

export const ProductView = ({product}: ProductViewProps) => {
    return (
        <div className="text-gray-700 body-font overflow-hidden bg-white">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <Image alt={product.name}
                           height={300}
                           width={300}
                           className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                           src={product.defaultImage.urlOriginal}/>

                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
                        <div className="flex mb-4">

                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">

          </span>
                        </div>
                        <p className="leading-relaxed">{product.plainTextDescription}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">

                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">${product.prices.price.value}</span>
                            <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
