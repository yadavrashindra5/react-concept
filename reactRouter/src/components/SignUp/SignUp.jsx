import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const naviage = useNavigate();
  const [user, setUser] = useState({
    name: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleClickHandler = async () => {
    const x = await fetch("http://localhost:9090/auth/signup", {
      method: "POST", // Use uppercase for HTTP methods (not mandatory but conventional)
      headers: {
        "Content-Type": "application/json", // Set content type to JSON
      },
      body: JSON.stringify(user), // Convert the user object to JSON format
    });
    const data = await x.json();
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
    }
    if (data.success) {
      localStorage.setItem("token", data.token);
      naviage("/");
    }
  };

  return (
    <div>
      <div className="w-[40%] mx-auto my-4 border-2 border-[#670e6c] flex flex-col gap-x-4 rounded">
        <div className="text-lg text-gray-600 uppercase font-bold p-2">
          SignUp Form
        </div>
        <div>
          <div className="flex flex-col space-y-2 p-3">
            <label
              htmlFor="name"
              className="text-start text-gray-700 font-semibold"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={user.name}
              onChange={handleChange}
              name="name"
            />
          </div>

          <div className="flex flex-col space-y-2 p-3">
            <label
              htmlFor="email"
              className="text-start text-gray-700 font-semibold"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter Your Email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={user.email}
              onChange={handleChange}
              name="email"
            />
          </div>

          <div className="flex flex-col space-y-2 p-3">
            <label
              htmlFor="name"
              className="text-start text-gray-700 font-semibold"
            >
              Password
            </label>
            <input
              type="text"
              id="password"
              placeholder="Enter Your Password"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={user.password}
              onChange={handleChange}
              name="password"
            />
          </div>

          <button
            className="w-[30%] border-2 border-[#bdbac1] p-2 rounded mb-3"
            onClick={handleClickHandler}
          >
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
