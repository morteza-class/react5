import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import DsTypography from "../../../components/design-system/DsTypography";
import Loading from "../../../components/global/Loading";
import PageHeader from "../../../components/global/PageHeader";
import { getPost } from "../../../services/post-service";

const PostDetails = () => {

	const { postId } = useParams();

	const { isLoading, data: details } = useQuery({
		queryKey: ['post', postId],
		queryFn: () => getPost(Number(postId))
	})

	return (
		<>
			<PageHeader text={`Post Details - Post ID=${postId}`} element="h2" showBack backRoute="/app/posts" />
			{
				isLoading ?
					<Loading />
					:
					<div className="bg-gray-700 p-4 rounded-lg w-1/2">
						<DsTypography element="h1" className="text-2xl font-bold mb-4">{details?.title || ''}</DsTypography>
						<DsTypography element="p" className="text-xl">{details?.body || ''}</DsTypography>
					</div>
			}
		</>
	)
}

export default PostDetails