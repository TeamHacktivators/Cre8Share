import React, { useState } from "react";
import axios from "axios";
import "./Login-Signup.css";
import { Link } from "react-router-dom";

function LoginSignup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
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
        "http://localhost:8000/users/signUp",
        formData
      );
      console.log("User signed up successfully:", response.data);
      // Redirect to another page or show a success message
    } catch (error) {
      console.error("Sign up failed:", error);
      // Handle sign-up failure (e.g., display error message to user)
    }
  }

  return (
    <div className="Flex-Box">
      <div className="Heading"> SIGN UP </div>
      <div className="form-ui">
        <form className="form-uidesign " onSubmit={handleSubmit}>
          <label>USERNAME</label>
          <br />
          <input
            className="inputs"
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br />
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
          <label>Confirm Password</label>
          <br />
          <input
            className="inputs"
            type="password"
            placeholder="Confirm your password"
            name="confirm_password"
            value={formData.confirm_password}
            onChange={handleChange}
            required
          />
          <br />
          <p>
            {" "}
            Already an Existing User ?<Link to="/login"  type='submit' >LogIn</Link>
          </p>
          <Link to="/login" className="buttonui" type='submit' onChange={handleChange}>SIGN UP</Link>
        </form>
      </div>
    </div>
  );
}

export default LoginSignup;
