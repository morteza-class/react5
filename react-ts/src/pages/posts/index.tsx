
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { DataGrid, type GridColDef, type GridPaginationModel } from '@mui/x-data-grid';
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { LucideEye, LucidePencil, LucideRefreshCcw, LucideTrash } from "lucide-react";
import { useState } from 'react';
import { Link, useNavigate } from "react-router";
import DsButton from "../../components/design-system/DsButton";
import PageHeader from "../../components/global/PageHeader";
import { getPostsApi } from "../../services/posts-service";

const Posts = () => {

	const navigate = useNavigate();

	const [paginationModel, setPaginationModel] = useState<GridPaginationModel>({
		page: 0,
		pageSize: 10
	});

	const { data, isLoading, refetch, isFetching } = useQuery({
		queryKey: ['posts-list', paginationModel.page, paginationModel.pageSize],
		queryFn: () => getPostsApi({ page: paginationModel.page, pageSize: paginationModel.pageSize }),
		placeholderData: keepPreviousData
	});

	const columns: GridColDef[] = [
		{ field: 'id', headerName: 'Row', width: 80, headerClassName: 'text-lg' },
		{ field: 'title', headerName: 'Title', width: 300, headerClassName: 'text-lg' },
		{ field: 'userId', headerName: 'User', headerClassName: 'text-lg' },
		{ field: 'body', headerName: 'Post Text', width: 400, headerClassName: 'text-lg' },
		{ field: 'views', headerName: 'Views', headerClassName: 'text-lg' },
		{
			field: 'tags',
			headerName: 'Tags',
			width: 200,
			headerClassName: 'text-lg',
			renderCell: (params) => {
				return (params.value.join(', '))
			}
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 200,
			headerClassName: 'text-lg',
			renderCell: (params) => {

				const onClick = (type: 'delete' | 'edit' | 'show') => {
					switch (type) {
						case 'show': navigate(`/app/posts/${params.id}`)
					}
				}

				return (
					<ButtonGroup variant="outlined" size="small">
						<Button color="error" className="h-9" onClick={() => onClick('delete')}><LucideTrash size={16} /></Button>
						<Button color="info" className="h-9" onClick={() => onClick('edit')}><LucidePencil size={16} /></Button>
						<Button color="inherit" className="h-9" onClick={() => onClick('show')}><LucideEye size={16} /></Button>
					</ButtonGroup>
				)
			}
		},
	];

	return (
		<>
			<div className="flex justify-between items-center mb-2">
				<PageHeader text="Posts Page" />

				<div className="flex items-center gap-2">
					<DsButton startIcon={<LucideRefreshCcw />} onClick={() => refetch()} loading={!isLoading && isFetching} tooltip="Refetch" />
					<Link to="create">
						<DsButton color="primary" size="large">Create Post</DsButton>
					</Link>
				</div>
			</div>

			<DataGrid
				columns={columns}
				rows={data?.posts}
				paginationMode="server"
				paginationModel={paginationModel}
				onPaginationModelChange={setPaginationModel}
				rowCount={data?.total ?? 0}
				pageSizeOptions={[5, 10, 20, 50]}
				loading={isFetching}
			/>
		</>

	)
}

export default Posts