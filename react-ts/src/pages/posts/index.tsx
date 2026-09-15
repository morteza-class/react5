
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

				<PageHeader text="Posts Page" />

				<div className="flex items-center gap-2">
					<DsButton
						variant="contained"
						size="large"
						startIcon={<LucideRefreshCcw />}
						onClick={() => refetch()}
						loading={!isLoading && isFetching}
						tooltip="Refetch" />
					<Link to="create">
						<DsButton color="primary" variant="contained" size="large">Create Post</DsButton>
					</Link>
				</div>

			</div>

			<DataGrid columns={columns} loading={isLoading || isFetching} rows={data?.posts} />

		</>

	)
}

export default Posts