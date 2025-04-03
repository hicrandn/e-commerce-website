import Image from "next/image";
import Link from "next/link";

async function getProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return res.json();
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="relative h-[400px] w-full">
            <Image
              src={product.thumbnail}
              alt={product.title}
              fill
              className="object-contain rounded-md"
            />
          </div>
        </div>

        <div className="md:w-1/2">
          <h1 className="text-3xl text-black font-bold mb-4">{product.title}</h1>
          <p className="text-black text-2xl font-bold mb-4">${product.price}</p>
          <p className="text-black mb-6">{product.description}</p>

          <div className="mb-6">
            <h2 className="text-xl text-black font-semibold mb-2">Specifications</h2>
            <ul className="list-disc list-inside">
              <li className="text-black mb-1">Brand: {product.brand}</li>
              <li className="text-black mb-1">Category: {product.category}</li>
              <li className="text-black mb-1">Rating: {product.rating}/5</li>
              <li className="text-black mb-1">Stock: {product.stock}</li>
              <li className="text-black mb-1">Discount: {product.discountPercentage}%</li>
            </ul>
          </div>

          <button className="bg-black  text-white px-8 py-3 rounded-md hover:bg-primary-dark transition-colors duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}
