import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "react-hot-toast/headless";
import DsButton from "../../../components/design-system/DsButton";
import PageHeader from "../../../components/global/PageHeader";
import { createPost } from "../../../services/post-service";

const formDataInitial = {
  title: "",
  body: "",
};

const CreatePost = () => {

  const [formData, setFormData] = useState(formDataInitial);
  const client = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      toast.success("پست با موفقیت ایجاد شد");
      setFormData(formDataInitial);
      client.invalidateQueries({ queryKey: ['posts'] });
    },
    onError: () => {
      toast.error("خطا در ایجاد پست");
    }
  });

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate({
      title: formData.title,
      body: formData.body,
      userId: 1,
    });
  };

  return (
    <>
      <PageHeader text="Create Post" element="h2" showBack backRoute="/app/posts" />

      <form onSubmit={e => handleSubmit(e)} className='w-1/4'>
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
          />
        </div>

        <DsButton text="Create Post" size="lg" color="blue" type="submit" isLoading={isPending} />
      </form>

    </>
  )
}
export default CreatePost