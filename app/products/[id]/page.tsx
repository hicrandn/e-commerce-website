import Image from "next/image";
import Link from "next/link";

async function getProduct(id: string) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }
  return res.json();
}

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  return (
    <main className="container  mx-auto px-4 py-8 ">
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        
        <div className="w-full md:w-1/2">
          <div className="relative w-full max-h-[400px] aspect-[4/3]">
            <Image
              src={product.image}
              alt={product.title}
              layout="fill"
              objectFit="contain"
              className="bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold text-[#0D134E] mb-4">{product.title}</h1>
          <p className="text-xl md:text-2xl text-[#FB2E86] font-bold mb-4">${product.price}</p>
          <p className="text-[#A9ACC6] text-sm md:text-base mb-6">{product.description}</p>

          
          <div className="mb-6">
  <h2 className="text-lg md:text-xl text-[#0D134E] font-semibold mb-2">
    Specifications
  </h2>
  <ul className="list-disc list-inside text-sm md:text-base">
    <li className="text-[#151875] mb-1">Category: {product.category}</li>
    <li className="text-[#151875] mb-1">
      Rating: {product.rating?.rate ?? "N/A"}/5 ({product.rating?.count} reviews)
    </li>
  </ul>
</div>



          
          <button className="w-full md:w-auto bg-[#FB2E86] text-white px-6 py-3 rounded-md ">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
}

