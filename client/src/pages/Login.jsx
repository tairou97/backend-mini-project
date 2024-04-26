import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9000/user", data);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="text-gray-700 box flex h-screen justify-center items-center">
      <form onSubmit={loginUser} className="flex  gap-4  flex-col">
        <div>
          <label htmlFor="" className="py-6 px-10 bg-green-700  text-white">
            Email
          </label>
          <input
            className=" py-5 pl-2 pr-2 outline-none w-80"
            type="email"
            placeholder="enter your email...."
            onChange={(e) => setData({ ...data, email: e.target.value })}
            value={data.email}
          />
        </div>
        <div>
          <label htmlFor="" className="py-6 px-6 bg-green-700 text-white">
            Password
          </label>
          <input
            className=" py-5 pl-2 pr-2 outline-none w-80 "
            type="password"
            placeholder="enter your password...."
            onChange={(e) => setData({ ...data, password: e.target.value })}
            value={data.password}
          />
        </div>

        <button type="submit" className="p-5 bg-green-700 text-white font-bold">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
