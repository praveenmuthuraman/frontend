import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password };
    try {
      const res = await axios.post(
        "https://passwordapi.onrender.com/api/login",
        payload
      );
      toast.success(res.data.message);
       setTimeout(() => {
         navigate("/Dashboard");
       }, 2000);
      } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #f0f0f0, #333333)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        className="card text-align-center"
        style={{ width: "18rem", textAlign: "center" }}
      >
        <ToastContainer />
        <div className="card-body">
          <h3 className="sign-up-title" style={{ color: "dimgray" }}>
            Welcome back! Please sign in
          </h3>
          <hr className="colorgraph" />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="d-flex">Email address</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label className="d-flex">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                onChange={handleShowPassword}
              />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
                <label className="d-flex justify-content-start">
                  Show Password
                </label>
                <Link
                  className="d-flex justify-content-end"
                  style={{ fontSize: "0.8em" }}
                  to="/reset-password"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <p className="text-center d-flex justify-content-center">
              <Link to="/">Register for an account</Link>
            </p>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
