import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleUser = () => {
  const { commentId } = useParams();
  const [comment, setComment] = useState();

  const fetchData = async (commentId) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/comments/${commentId}`
    );
    const user = await res.json();
    console.log(user);
    setComment(user);
  };
  useEffect(() => {
    fetchData(commentId);
  });
  return (
    <main className="flex flex-col shadow-md gap-y-4 w-[500px] p-4 text-[30px] m-auto border-2">
      <div>{comment && comment.postId}</div>
      <div>{comment && comment.id}</div>
      <div>{comment && comment.name}</div>
      <div>{comment && comment.email}</div>
    </main>
  );
};

export default SingleUser;
