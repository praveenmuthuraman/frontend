import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [responseMsg, setResponseMsg] = useState("");
  const { token } = useParams();
 const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { password };
    try {
      const res = await axios.post(
        `https://passwordapi.onrender.com/api/reset-password/${token}`,
        payload
      );
   
      toast.success(res.data.message);
     setTimeout(() => {
       navigate("/login");
     }, 2000);
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
        <div className="card-body">
          <h3 className="sign-up-title" style={{ color: "dimgray" }}>
            Reset Password
          </h3>
          <hr className="colorgraph" />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="d-flex">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ResetPassword;
