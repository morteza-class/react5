import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PageHeader from "../../components/PageHeader";
import Typography from "../../components/Typography";
import Loading from "../../components/Loading";

const PostDetails = () => {

  const [detils, setDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();

  const getDetails = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then(res => res.json())
      .then((data) => {
        console.log(data);
        setDetails(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      })
  }

  useEffect(() => {
    getDetails();
  }, [])

  return (
    <section>
      <PageHeader text="Post Details" />
      {
        isLoading ?
          <Loading />
          :
          <div className="bg-gray-800 p-4 max-w-1/3 mt-4 rounded-xl">
            <Typography element="h1" className="text-2xl my-4">{detils.title}</Typography>
            <Typography element="h1" className="text-lg my-4 text-gray-400">{detils.body}</Typography>
          </div>
      }
    </section>
  )
}

export default PostDetails