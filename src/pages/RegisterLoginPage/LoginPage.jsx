import { useState } from "react";
import { axiosInstance } from "../../services/axios";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { LOGIN, REGISTER, TOURS } from "../../utils/variables";
import { useAuth } from "../../hocs/AuthProvider";
import axios from "axios";

const LoginPage = ({ isLogin }) => {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const nav = useNavigate();
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleRegister = async () => {
    try {
      setIsLoading(true);
      const hashedPassword = userInfo?.password;
      if (isLogin) {
        const res = await axios.post(
          "https://tourismapp-lice.onrender.com/auth/login",
          {
            email: userInfo?.email,
            password: hashedPassword,
          }
        );
        login(res?.data?.token);
        nav(TOURS);
      } else {
        await axiosInstance.post("auth/register", {
          username: userInfo?.username,
          email: userInfo?.email,
          password: hashedPassword,
          isAdmin: false,
        });
      }
    } catch (e) {
      if (e?.response?.data[0].msg) setErr(e?.response?.data[0].msg);
      else console.log(e);
    }
  };

  return (
    <>
      <div className="sign-up-container">
        <h2>{isLogin ? "Sign In" : "Sign Up"}</h2>
        <form>
          {!isLogin && (
            <>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={userInfo?.username}
                onChange={(e) => {
                  e.preventDefault();
                  setUserInfo((prev) => ({
                    ...prev,
                    username: e?.target?.value,
                  }));
                }}
                required
              />
            </>
          )}
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo?.email}
            required
            onChange={(e) => {
              e.preventDefault();
              setUserInfo((prev) => ({ ...prev, email: e?.target?.value }));
            }}
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userInfo?.password}
            onChange={(e) => {
              e.preventDefault();
              setUserInfo((prev) => ({
                ...prev,
                password: e?.target?.value,
              }));
            }}
            required
          />
          <span>{err}</span>
          <div className="btns">
            <button onClick={handleRegister}>
              {isLoading ? "Loading..." : !isLogin ? "Sign Up" : "Sign In"}
            </button>
            <button onClick={() => nav(isLogin ? REGISTER : LOGIN)}>
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
