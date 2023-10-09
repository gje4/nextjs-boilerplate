import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
    product: productContent;
}

interface productContent {
        entityId: string,
        name: string,
        image: string,
    prices: {
            price: {
                value: string
            }
    }
}

export const ProductCard = ({product}: ProductCardProps) => {
  return (
    <div key={product.name}>
        <Image
          alt={product.name}
          height={300}
          src={product.image ?? ''}
          width={300}
        />
          <Link href={`/product/${product.entityId}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </Link>
            {product?.prices?.price.value}
    </div>
  );
};
