import React, { useState, useEffect } from "react";
import {} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../auth/AuthProvider";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState({});
  const [loginSuccess, setLoginSuccess] = useState(false);
  const { setIsAuthenticated } = useAuth();

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(validate(formValues));

    const { email, password } = formValues;
    try {
      if (!email || !password) {
        setError({
          email: "Email is required",
          password: "Password is required",
        });
        return;
      }
      const res = await axios.post(
        "http://localhost:3000/login",
        { email, password },
        {
          "Content-Type": "Application",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        }
      );

      console.log(res.data, "login response");
      if (res.data.success) {
        localStorage.setItem("accessToken", res.data.token);

        login(res.data.token);
        setLoginSuccess(true);
        setIsAuthenticated(true);
        toast.success("Logged in successfully!");
        navigate("/cart");
      } else {
        console.log("Login failed:", res.data.message);
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.log("login error", err);
      toast.error("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    if (loginSuccess) {
      const timer = setTimeout(() => setLoginSuccess(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [loginSuccess]);

  const validate = (values) => {
    const error = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      error.email = "email is required";
      toast.warning("please fill  your email");
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format";
      toast.warning("Please fill valid email!");
    }
    if (!values.password) {
      error.password = "password is required";
    } else if (values.password.length < 4) {
      error.password = "password must be more than 4 characters";
      toast.warning("Password is too short!");
    } else if (values.password.length > 10) {
      error.password = "password cannot exceed more than 10 characters";
      toast.warning("Password is too big!");
    }
    return error;
  };

  return (
    <>
      {loginSuccess ? (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50  w-full max-w-md bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded  shadow-md flex items-center  gap-2">
          <svg
            className="w-5 h-5 mt-1 text-green-600 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-sm font-medium">Signed in successfully!</span>
        </div>
      ) : null}

      <div className="min-h-90 flex items-center justify-center p-1">
        <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-md">
          <h1 className="text-4xl font-bold text-center text-gray-800 underline mb-3">
            Login
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Email :-
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formValues.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
              />
              <p className="text-red-500 text-sm mt-1">{formError.email}</p>
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Password :-
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={formValues.password}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
              />
              <p className="text-red-500 text-sm mt-1">{formError.password}</p>
            </div>

            <div className="text-center mb-3">
              <button
                type="submit"
                className="w-full py-2 text-white font-semibold text-lg rounded-md bg-gradient-to-r from-[#71b7e6] to-[#9b59b6] hover:shadow-lg hover:translate-y-[-2px] transition-all"
              >
                Login
              </button>
            </div>

            <div className="text-center text-gray-600">
              <div>
                Don't have an account?
                <span
                  onClick={() => navigate("/signup")}
                  className="text-purple-600 font-semibold hover:text-blue-400"
                >
                  Sign up
                </span>
              </div>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
};

export default Login;
