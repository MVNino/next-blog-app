import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Latest Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          <Image
            src="https://via.placeholder.com/400x200"
            alt="Blog Post Image"
            width={100}
            height={100}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">
              Sample Blog Post Title
            </h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              vehicula eros.
            </p>
            <a href="#" className="text-blue-500 font-semibold">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
