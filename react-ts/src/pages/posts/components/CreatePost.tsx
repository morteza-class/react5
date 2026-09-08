import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import DsButton from "../../../components/design-system/DsButton";
import { createPostApi } from "../../../services/posts-service";
import { useAuthStore } from "../../../stores/auth.store";
import type { CreatePostForm } from "../../../types/posts";

const initialFormData = {
	title: '',
	body: '',
	userId: undefined
}

const CreatePost = () => {

	const { register, handleSubmit, formState: { errors } } = useForm<CreatePostForm>({
		defaultValues: initialFormData
	});
	const { user } = useAuthStore();
	const navigate = useNavigate();
	const queryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationFn: createPostApi,
		onSuccess: () => {
			toast.success('Post has been created sduccessfuly.');
			queryClient.invalidateQueries({ queryKey: ['posts-list'] })
			navigate('/app/posts');
		},
		onError: (error) => {
			toast.error(error.message)
		}
	})

	const onSubmit = async (data: CreatePostForm) => {
		mutate({
			title: data.title,
			body: data.body,
			userId: user?.id
		})
	}

	return (

		<form className="bg-slate-800 p-8 rounded-lg mx-auto w-1/3 mt-4" onSubmit={handleSubmit(onSubmit)}>
			<div className='mb-4'>
				<label className='flex justify-between  items-center text-lg mb-1'>
					Title
					{errors.title && <span className='text-red-500 text-sm ml-2'>Post title is required</span>}
				</label>
				<input
					type="text"
					placeholder='Enter Post Title'
					className='w-full border border-gray-400 bg-gray-800 px-3 py-2 text-lg rounded-md'
					{...register('title', { required: true })}
				/>
			</div>

			<div className='mb-4'>
				<label className='flex justify-between  items-center text-lg mb-1'>
					Body
					{errors.body && <span className='text-red-500 text-sm ml-2'>Post body is required</span>}
				</label>
				<textarea
					placeholder='Enter Post Body'
					className='w-full border border-gray-400 bg-gray-800 px-3 py-2 text-lg rounded-md'
					{...register('body', { required: true })}
					rows={5}
				></textarea>
			</div>

			<div className="flex gap-4">
				<DsButton type="submit" color="blue" size="lg" text="Create" isLoading={isPending} />
				<Link to="/app/posts">
					<DsButton color="gray" size="lg" text="Cancel" isDisabled={isPending} />
				</Link>
			</div>


		</form>

	)
}

export default CreatePost