import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-background px-4 relative">
      
      {/* 404 Görseli */}
      <div className="flex-1 flex items-center justify-center pt-20 sm:pt-24 md:pt-32">
        <div className="relative w-full max-w-2xl">
          <Image 
            src="/not-found/Group.svg"
            alt="404 Not Found"
            width={933}
            height={677}
            className="h-auto object-cover"
          />
        </div>
      </div>

      
      <div className="absolute bottom-0 w-full flex justify-center">
        <Image
          src="/banners/image.svg"
          alt="Banner"
          width={1246}
          height={128}
          className="h-auto object-cover"
        />
      </div>
    </div>
  );
}
