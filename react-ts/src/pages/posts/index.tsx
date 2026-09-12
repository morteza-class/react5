
import Button from "@mui/material/Button";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import { useQuery } from "@tanstack/react-query";
import { LucideEye, LucideRefreshCcw } from "lucide-react";
import { Link, useNavigate } from "react-router";
import DsButton from "../../components/design-system/DsButton";
import PageHeader from "../../components/global/PageHeader";
import { getPostsApi } from "../../services/posts-service";

const Posts = () => {

	const navigate = useNavigate();

	const { data, isLoading, refetch, isFetching } = useQuery({
		queryKey: ['posts-list'],
		queryFn: () => getPostsApi()
	});

	const columns: GridColDef[] = [
		{ field: 'id', headerName: 'Row' },
		{ field: 'title', headerName: 'Title', width: 200 },
		{ field: 'userId', headerName: 'User' },
		{ field: 'body', headerName: 'Body', width: 400 },
		{ field: 'views', headerName: 'Views' },
		{
			field: 'tags', headerName: 'Tags', width: 200,
			renderCell: (params) => {
				return (
					<span>{params.value.join(', ')}</span>
				)
			}
		},
		{
			field: 'action', headerName: 'Action', width: 300,
			renderCell: (params) => {
				const onClick = () => {
					console.log(params)
					navigate(`/app/posts/${params.id}`)
				}
				return (
					<Button color="info" className="h-10" onClick={onClick}><LucideEye size={20} /></Button>
				)
			}
		},
	];

	return (
		<>
			<div className="flex justify-between items-center mb-2">
				<div className="flex items-baseline gap-2">
					<PageHeader text="Posts Page" />
					<DsButton justIcon icon={<LucideRefreshCcw />} onClick={refetch} isLoading={!isLoading && isFetching} tooltip="Refetch" />
				</div>
				<Link to="create">
					<DsButton color="blue" size="lg" text="Create Post" />
					<DsButton color="blue" size="lg" text="Create Post" />
				</Link>
			</div>

			{/* {
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
                                    <th className="px-2 py-4">Views</th>
                                    <th className="px-2 py-4 min-w-[250px]">Tags</th>
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
                                                <td className="p-2 text-lg">{post.views}</td>
                                                <td className="p-2 text-lg min-w-[250px]">{post.tags.join(', ')}</td>
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
            } */}


			<DataGrid columns={columns} loading={isLoading || isFetching} rows={data?.posts} />

		</>

	)
}

export default Posts