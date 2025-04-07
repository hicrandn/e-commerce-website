import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="relative w-full max-w-2xl h-[300px] md:h-[400px] lg:h-[500px]">
        <Image 
          src="/not-found/Group.svg"
          alt="404 Not Found"
          width={913}
          height={677}
          className="w-full h-max object-contain"
        />
      </div>
    </div>
  );
}
