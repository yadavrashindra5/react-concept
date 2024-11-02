import { useLoaderData, useNavigate } from "react-router-dom";

export const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const user = await res.json();
  return user;
};

const Comment = () => {
  // https://jsonplaceholder.typicode.com/comments

  const comment = useLoaderData();
  const navigate = useNavigate();

  const handleRouteChange = (id) => {
    navigate(`${id}`);
  };

  //   const [comment, setComment] = useState([]);
  //   useEffect(() => {
  //     console.log("useEffect");
  //     fetch("https://jsonplaceholder.typicode.com/comments")
  //       .then((response) => response.json())
  //       .then((data) => setComment(data));
  //   }, []);
  return (
    <div className="flex flex-col gap-3">
      {comment &&
        comment.map((c, i) => {
          return (
            <div
              key={i}
              className="border-2 p-4 cursor-pointer"
              onClick={() => {
                handleRouteChange(c.id);
              }}
            >
              {c.name}
            </div>
          );
        })}
    </div>
  );
};

export default Comment;
