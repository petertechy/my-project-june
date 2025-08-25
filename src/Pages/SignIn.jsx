import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = () => {
    const url = "http://localhost:5000/signin";
    let userInfo = { email, password };
    axios.post(url, userInfo).then((response) => {
      console.log(response);
      if(response.data.status){
        localStorage.token = response.data.token
        // localStorage.setItem(response.data.token)
        navigate('/dashboard')

      }
    });

    console.log(userInfo);
  };
  return (
    <>
      <div className="mx-auto col-7 p-4 my-3 rounded border">
        <h1>Sign In</h1>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="email"
          onChange={(e) => setemail(e.target.value)}
        />
        <input
          className="form-control mb-3"
          type="text"
          placeholder="password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <button
          className="btn btn-outline-success my-2 w-100"
          onClick={handleSubmit}
        >
          Sign In
        </button>
      </div>
    </>
  );
};

export default SignIn;
