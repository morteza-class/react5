import { DUMMY_BASE_URL } from "../constants";
import type { Post, PostsResponse } from "../types/posts";

export const getPosts = async (): Promise<PostsResponse> => {
  const response = await fetch(`${DUMMY_BASE_URL}/posts`);

  if (!response.ok) {
    throw new Error("خطا در دریافت پست‌ها");
  }

  const data: PostsResponse = await response.json();

  return data;
};

export const getPost = async (id: number): Promise<Post> => {
  const response = await fetch(
    `https://dummyjson.com/posts/${id}`,
  );

  if (!response.ok) {
    throw new Error("خطا در دریافت پست");
  }

  const data: Post = await response.json();

  return data;
};