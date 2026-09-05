import { DUMMY_BASE_URL } from "../constants";
import type { Post, PostsResponse } from "../types/posts";


// get posts list
export const getPostsApi = async (): Promise<PostsResponse> => {

    const response = await fetch(`${DUMMY_BASE_URL}/posts`);

    if (!response.ok) {
        throw new Error('Get posts failed')
    }
    const data: PostsResponse = await response.json();
    return data

}

// get post  details
export const getPostApi = async (id: number): Promise<Post> => {

    const response = await fetch(`${DUMMY_BASE_URL}/posts/${id}`);

    if (!response.ok) {
        throw new Error('Get post details failed')
    }
    const data: Post = await response.json();
    return data

}