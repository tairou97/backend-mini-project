import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    <div className="text-gray-700 flex h-screen justify-center items-center">
      <form
        onSubmit={registerUser}
        className="flex bg-green-700 text-gray-50   flex-col"
      >
        <div>
          <label htmlFor="name" className="p-6">
            Name
          </label>
          <input
            type="text "
            id="name"
            className="p-5"
            placeholder="enter your name...."
            onChange={(e) => setData({ ...data, name: e.target.value })}
            value={data.name}
          />
        </div>

        <label className="p-3">Email</label>
        <input
          type="email"
          placeholder="enter your email...."
          onChange={(e) => setData({ ...data, email: e.target.value })}
          value={data.email}
        />
        <label htmlFor="" className="p-3">
          Password
        </label>
        <input
          type="password"
          placeholder="enter your password...."
          onChange={(e) => setData({ ...data, password: e.target.value })}
          value={data.password}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
