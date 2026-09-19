
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { useQuery } from "@tanstack/react-query";
import { LucideEye, LucidePencil, LucideRefreshCcw, LucideTrash } from "lucide-react";
import { Link, useNavigate } from "react-router";
import DsButton from "../../components/design-system/DsButton";
import PageHeader from "../../components/global/PageHeader";
import { getPostsApi } from "../../services/posts-service";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';


const Posts = () => {

    const navigate = useNavigate();

    const { data, isLoading, refetch, isFetching } = useQuery({
        queryKey: ['posts-list'],
        queryFn: () => getPostsApi()
    });

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'Row', width: 50 },
        { field: 'title', headerName: 'Title', width: 300 },
        { field: 'userId', headerName: 'User', width: 50 },
        { field: 'body', headerName: 'Post Text', width: 500 },
        { field: 'views', headerName: 'Views', width: 100 },
        { field: 'tags', headerName: 'Tags', width: 200 },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {

                const onClick = (action: 'show' | 'delete' | 'edit') => {
                    console.log(action)
                    switch (action) {
                        case 'show': navigate(`/app/posts/${params.id}`);
                        break;
                    }
                }

                return (
                    <ButtonGroup variant="outlined" size='small' className='mt-2'>
                        <Button color='error' className='h-9' onClick={() => onClick('delete')}><LucideTrash size={18} /></Button>
                        <Button color='info' className='h-9' onClick={() => onClick('edit')}><LucidePencil size={18} /></Button>
                        <Button color='inherit' className='h-9' onClick={() => onClick('show')}><LucideEye size={18} /></Button>
                    </ButtonGroup>
                )
            }
        }
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

            <DataGrid rows={data?.posts} columns={columns} loading={isLoading || isFetching} />
        </>

    )
}

export default Posts