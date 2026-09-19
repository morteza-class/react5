import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import DsButton from "../../../components/design-system/DsButton";
import { createPostApi } from "../../../services/posts-service";
import { useAuthStore } from "../../../stores/auth.store";
import type { CreatePostForm } from "../../../types/posts";

const CreatePost = () => {

    const { user } = useAuthStore();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { register, handleSubmit, formState: { errors } } = useForm<CreatePostForm>({
        defaultValues: {
            title: '',
            body: '',
            userId: undefined
        }
    })

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

    const onCreatePost = (formData: CreatePostForm) => {
        mutate({
            title: formData.title,
            body: formData.body,
            userId: user?.id
        })
    }

    return (

        <form className="bg-slate-800 p-8 rounded-lg mx-auto w-1/3 mt-4" onSubmit={handleSubmit(onCreatePost)}>
            <div className='mb-4'>
                <label className='flex justify-between items-center text-lg mb-1 text-gray-200 dark:text-gray-200'>
                    Title
                    {errors.title && <span className="text-red-500">{errors.title.message}</span>}
                </label>
                <input
                    type="text"
                    placeholder='Enter Post Title'
                    className='w-full border border-gray-400 bg-gray-800 px-3 py-2 text-lg rounded-md text-gray-300 dark:text-gray-300'
                    {...register('title', { required: 'Post title is required' })}
                />
            </div>

            <div className='mb-4'>
                <label className='flex justify-between items-center text-lg mb-1 text-gray-200 dark:text-gray-200'>
                    Body
                    {errors.body && <span className="text-red-500">{errors.body.message}</span>}
                </label>
                <textarea
                    placeholder='Enter Post Body'
                    className='w-full border border-gray-400 bg-gray-800 px-3 py-2 text-lg rounded-md text-gray-300 dark:text-gray-300'
                    rows={5}
                    {...register('body', { required: 'Post body is required', minLength: { value: 10, message: 'At Least 10 Characters' } })}
                ></textarea>
            </div>

            <div className="flex gap-4">
                <DsButton type="submit" color="primary" size="large" loading={isPending}>Create</DsButton>
                <Link to="/app/posts">
                    <DsButton color="inherit" size="large" disabled={isPending}>Cancel</DsButton>
                </Link>
            </div>


        </form>

    )
}

export default CreatePost