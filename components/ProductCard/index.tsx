import Image from 'next/image';
import Link from 'next/link';




export const ProductCard = ({product}: any) => {
  return (
    <div key={product.entityId}>
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
