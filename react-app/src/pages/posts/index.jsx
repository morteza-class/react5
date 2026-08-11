import { useEffect, useState } from "react";
import Loading from "../../components/Loading";
import Button from "../../components/Button";

const Posts = () => {

  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      })
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <>
      <h1>Posts</h1>

      {
        isLoading ?
          <Loading />
          :
          <div className="border border-gray-600 max-h-[80vh] overflow-auto">
            <table>
              <thead className="bg-slate-700 border-b-2 border-gray-600 sticky -top-1">
                <tr>
                  <th className="p-4">Row</th>
                  <th className="p-4">Title</th>
                  <th className="p-4">User</th>
                  <th className="p-4">Body</th>
                  <th className="p-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  posts.map((post, index) => {
                    return (
                      <tr key={post.id} className="border-b border-gray-600 even:bg-slate-800 hover:bg-slate-950">
                        <td className="p-2">{index + 1}</td>
                        <td className="p-2">{post.title}</td>
                        <td className="p-2">{post.userId}</td>
                        <td className="p-2">{post.body}</td>
                        <td className="p-2">
                          <div className="flex">
                            <Button text="Details" size="sm" color="blue" />
                          </div>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
      }

    </>
  )
}

export default Posts;