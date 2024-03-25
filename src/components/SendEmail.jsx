import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer

const Login = () => {
  const [email, setEmail] = useState("");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email };
    try {
      const res = await axios.post(
        "https://passwordapi.onrender.com/api/reset-password",
        payload
      );
      toast.success(res.data.message);
      setResponseMsg(res.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
      setResponseMsg(error.response.data.message);
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
        <ToastContainer /> {/* Include ToastContainer */}
        <div className="card-body">
          <h3 className="sign-up-title" style={{ color: "dimgray" }}>
            Verify Your Account
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
