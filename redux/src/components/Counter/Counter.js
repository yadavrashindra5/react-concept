import { useDispatch, useSelector } from "react-redux";
const Counter = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  console.log(store);
  const incrementHandler = () => {
    console.log("incrementHandler");
    dispatch({ type: "INCREMENT" });
  };

  const decrementHandler = () => {
    console.log("incrementHandler");
    dispatch({ type: "DECREMENT" });
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <button
        style={{ padding: "5px 10px", fontSize: "20px", cursor: "pointer" }}
        onClick={incrementHandler}
      >
        Increment
      </button>
      <h3>{store.counter}</h3>
      <button
        style={{ padding: "5px 10px", fontSize: "20px", cursor: "pointer" }}
        onClick={decrementHandler}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
