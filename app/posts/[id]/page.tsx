import { convertToDateString } from "@/app/utils/utils";
import Image from "next/image";
import React from "react";

const fetchPost = async (id: any) => {
  try {
    const response = await fetch(
      `${process.env.BLOG_API_DNS}/api/v1/posts/${id}`
    );

    const { data: post } = await response.json();

    return post;
  } catch (error) {
    console.error(error);

    throw error;
  }
};

const ShowPost: React.FC<ShowPostProps> = async ({ params: { id } }) => {
  const {
    id: postId,
    title,
    description,
    content,
    createdAt,
  }: Post = await fetchPost(id);


  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            className="h-48 w-full object-cover md:w-48"
            src="https://via.placeholder.com/150"
            alt="Blog Post Thumbnail"
            width={100}
            height={100}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {convertToDateString(createdAt)}
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {title}
          </a>
          <p className="mt-2 text-gray-500">{description}</p>
          <p className="mt-2 text-gray-600">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowPost;
