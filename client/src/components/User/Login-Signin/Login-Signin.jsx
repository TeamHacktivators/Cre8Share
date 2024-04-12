import React, { useState } from "react";
import axios from "axios";
import "../Login-Signup/Login-Signup.css";

function LoginSignin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/users/signIn",
        formData
      );
      const token = response.data.token;
      localStorage.setItem("token", token);
    } catch (error) {
      console.error("Sign up failed:", error);
    }
  }

  return (
    <div className="Flex-Box">
      <div className="Heading"> LOG IN </div>
      <div className="form-ui">
        <form className="form-uidesign " onSubmit={handleSubmit}>
          <label>EMAIL</label> <br />
          <input
            className="inputs"
            type="email"
            placeholder="Your Mail Id"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <br />
          <label>Password</label>
          <br />
          <input
            className="inputs"
            type="password"
            placeholder="Your Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <br />
          <p>
            {" "}
            New User ?<a href="">SignUp</a>
          </p>
          <button className="buttonui" type="submit">
            SIGNIN
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginSignin;
