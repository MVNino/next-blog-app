import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const fetchPost = async (id: number) => {
  console.log(`${process.env.BLOG_API_DNS}/api/v1/blogs/${id}`);
  const res = await fetch(`${process.env.BLOG_API_DNS}/api/v1/blogs/`);

  const { data: post } = await res.json();

  return post;
};

const ShowBlog = async () => {
  // const router = useRouter()

  // console.log('ey ey ey : ', params.id)


  return (
    <>
      
    </>
  );
};

export default ShowBlog;
