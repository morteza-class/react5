import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState, type SubmitEvent } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import DsButton from "../../../components/design-system/DsButton";
import { createPostApi } from "../../../services/posts-service";
import type { CreatePostForm } from "../../../types/posts";
import { useAuthStore } from "../../../stores/auth.store";

const initialFormData = {
    title: '',
    body: '',
    userId: undefined
}

const CreatePost = () => {

    const [formData, setFormData] = useState<CreatePostForm>(initialFormData);
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

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        mutate({
            title: formData.title,
            body: formData.body,
            userId: user?.id
        })
    }

    return (

        <form className="bg-slate-800 p-8 rounded-lg mx-auto w-1/3 mt-4" onSubmit={(e) => handleSubmit(e)}>
            <div className='mb-4'>
                <label className='text-lg mb-1'>Title</label>
                <input
                    type="text"
                    placeholder='Enter Post Title'
                    className='w-full border border-gray-400 bg-gray-800 px-3 py-2 text-lg rounded-md'
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                />
            </div>

            <div className='mb-4'>
                <label className='text-lg mb-1'>Body</label>
                <textarea
                    placeholder='Enter Post Body'
                    className='w-full border border-gray-400 bg-gray-800 px-3 py-2 text-lg rounded-md'
                    value={formData.body}
                    onChange={(e) => setFormData({ ...formData, body: e.target.value })}
                    required
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