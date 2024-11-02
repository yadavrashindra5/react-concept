import { useEffect, useState } from "react";

const Post = () => {
  console.log("post");
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
      response.json().then((data) => setPost(data))
    );
  }, []);
  return (
    <div className="flex gap-3 flex-wrap justify-center">
      {post.map((p, index) => {
        return (
          <div
            key={index}
            className="border-4 border-black w-64 p-2 hover:cursor-pointer "
          >
            <div className="text-left text-5xl">{p.userId}</div>
            <div className="text-left text-5xl">{p.id}</div>
            <div>{p.title}</div>
            <div>{p.body}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Post;
