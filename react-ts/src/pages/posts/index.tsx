
import { Link } from "react-router";
import DsButton from "../../components/design-system/DsButton";
import Loading from "../../components/global/Loading";
import PageHeader from "../../components/global/PageHeader";
import { useQuery } from "@tanstack/react-query";
import { getPostsApi } from "../../services/posts-service";

const Posts = () => {

    const {data, isLoading} = useQuery({
        queryKey: ['posts-list'],
        queryFn: () => getPostsApi()
    });


    return (
        <>
            <PageHeader text="Posts Page" />

            {
                isLoading ?
                    <Loading />
                    :
                    <div className="border border-gray-500 h-[80vh] overflow-auto">
                        <table>
                            <thead className="bg-slate-700 sticky top-0">
                                <tr>
                                    <th className="px-2 py-4">Row</th>
                                    <th className="px-2 py-4">Title</th>
                                    <th className="px-2 py-4">User</th>
                                    <th className="px-2 py-4">Body</th>
                                    <th className="px-2 py-4">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.posts.map((post, index) => {
                                        return (
                                            <tr key={post.id} className="border border-gray-600 even:bg-gray-800 hover:bg-gray-700">
                                                <td className="p-2 text-lg">{index + 1}</td>
                                                <td className="p-2 text-lg">{post.title}</td>
                                                <td className="p-2 text-lg">{post.userId}</td>
                                                <td className="p-2 text-lg">{post.body}</td>
                                                <td className="p-2 text-lg">
                                                    <Link to={`/app/posts/${post.id}`}>
                                                        <DsButton text="Details" size="md" color="blue" />
                                                    </Link>
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

export default Posts