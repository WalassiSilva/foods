import { Prisma } from "@prisma/client";
import ProductItem from "./product-item";

type ProductListProps = {
  products: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>[];
};

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="flex gap-4 overflow-x-scroll px-5 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem key={product.name} product={product} />
      ))}
    </div>
  );
}
