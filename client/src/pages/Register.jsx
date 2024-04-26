import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Img from "../img/Img";
var sectionStyle = {
  width: "100%",
  height: "400px",
  backgroundImage: "url(" + { Img } + ")",
};
const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const registerUser = async (e) => {
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
      <form onSubmit={registerUser} className="flex  gap-4  flex-col">
        <div>
          <label className="py-6 px-8 bg-green-700 text-white">Name</label>
          <input
            type="text "
            id="name"
            className="py-5 pl-3 pr-2 outline-none  w-80"
            placeholder="enter your name...."
            onChange={(e) => setData({ ...data, name: e.target.value })}
            value={data.name}
          />
        </div>
        <div className="   ">
          <label className="py-6 px-9 bg-green-700 text-white">Email</label>
          <input
            type="email"
            className="py-5 pl-2 pr-3 outline-none w-80"
            placeholder="enter your email...."
            onChange={(e) => setData({ ...data, email: e.target.value })}
            value={data.email}
          />
        </div>
        <div>
          <label htmlFor="" className="py-6 px-5 bg-green-700 text-white">
            Password
          </label>
          <input
            type="password"
            className="py-5 pl-2 pr-2 outline-none  w-80"
            placeholder="enter your password...."
            onChange={(e) => setData({ ...data, password: e.target.value })}
            value={data.password}
          />
        </div>

        <button type="submit" className="p-5 bg-green-700 text-white font-bold">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
