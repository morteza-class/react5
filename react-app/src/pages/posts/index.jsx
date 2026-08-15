import { useEffect, useState } from "react";
import { Link } from "react-router";
import Button from "../../components/Button";
import Loading from "../../components/Loading";
import PageHeader from "../../components/PageHeader";

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
      <PageHeader text="Posts" showBack={false} />
      {
        isLoading ?
          <Loading />
          :
          <div className="border border-gray-600 max-h-[75vh] overflow-auto">
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
                            <Link to={`/posts/${post.id}`}>
                              <Button text="Details" size="sm" color="blue" />
                            </Link>
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