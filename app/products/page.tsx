import Image from "next/image";
import Link from "next/link";


interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail: string;
}

async function fetchProducts(): Promise<Product[]> {
  const res = await fetch('https://dummyjson.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  const data = await res.json();
  return data.products;
}

export default async function ProductsPage() {
  const  products  = await fetchProducts();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl text-[#1D3178] font-bold mb-8">Products</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link 
            href={`/products/${product.id}`} 
            key={product.id}
            className="group"
          >
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  fill
                  className="object-contain p-8"
                />
              </div>
              <div className="p-4 flex-col justify-between flex-grow">
                <h2 className="text-lg text-[#151875] font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-600 mb-2">{product.category}</p>
                <p className="text-[#FB2E86] font-bold">${product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
} 