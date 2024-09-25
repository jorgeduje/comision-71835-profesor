import { useFetch } from "../../utils/hooks/useFetch";

const Comments = () => {
  const {
    data: comments,
    error,
    isLoading,
  } = useFetch("https://jsonplaceholder.org/comments");

  return <div></div>;
};

export default Comments;
