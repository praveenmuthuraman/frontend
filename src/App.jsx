import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import SendEmail from "./components/SendEmail";
import Setpassword from "./components/Setpassword";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<SendEmail />} />
        <Route path="/reset-password/:token" element={<Setpassword />} />
        <Route path="/Dashboard" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
