import React, { useState, useEffect } from "react";
import axios from "axios";

const Signup = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    contact: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(validate(formValues));
    setIsSubmit(true);

    const { username, email, password, contact } = formValues;
    try {
      const result = await axios.post("http://localhost:3000/signup", {
        username,
        email,
        password,
        contact,
      });

      console.log("Response:", result.data);
    } catch (error) {
      console.log("Signup API Error:", error);
    }
  };

  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log("Form submitted successfully", formValues);
      setFormValues(initialValues);

      const timer = setTimeout(() => {
        setIsSubmit(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [formError, isSubmit]);

  const validate = (values) => {
    const error = {};
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexPhone = /^[0-9]{10}$/;

    if (!values.username) {
      error.username = "Username is required";
    }

    if (!values.email) {
      error.email = "Email is required";
    } else if (!regexEmail.test(values.email)) {
      error.email = "Invalid email format";
    }

    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 4) {
      error.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      error.password = "Password cannot exceed more than 10 characters";
    }

    if (!values.confirmPassword) {
      error.confirmPassword = "Confirm password is required";
    } else if (values.password !== values.confirmPassword) {
      error.confirmPassword = "Passwords do not match";
    }

    if (!values.contact) {
      error.contact = "Contact number is required";
    } else if (!regexPhone.test(values.contact)) {
      error.contact = "Enter a valid 10-digit contact number";
    }

    return error;
  };

  return (
    <>
      {Object.keys(formError).length === 0 && isSubmit ? (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow-md flex items-center gap-2">
          <svg
            className="w-5 h-5 mt-1 text-green-600 shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span className="text-sm font-medium">Signed up successfully!</span>
        </div>
      ) : null}

      <div className="min-h-90 flex items-center justify-center p-2">
        <div className="bg-white p-4 rounded-xl shadow-md w-full max-w-xl">
          <h1 className="text-3xl font-bold text-center text-gray-800 underline mb-3">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formValues.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                />
                <p className="text-red-500 text-sm mt-1">
                  {formError.username}
                </p>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                />
                <p className="text-red-500 text-sm mt-1">{formError.email}</p>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                />
                <p className="text-red-500 text-sm mt-1">
                  {formError.password}
                </p>
              </div>

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formValues.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                />
                <p className="text-red-500 text-sm mt-1">
                  {formError.confirmPassword}
                </p>
              </div>

              <div>
                <label
                  htmlFor="contact"
                  className="block mb-2 text-sm font-medium text-gray-700"
                >
                  Contact
                </label>
                <input
                  type="tel"
                  id="contact"
                  name="contact"
                  value={formValues.contact}
                  onChange={handleChange}
                  placeholder="Enter your contact number"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
                />
                <p className="text-red-500 text-sm mt-1">{formError.contact}</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <button
                type="submit"
                className="w-full py-3 text-white font-semibold text-lg rounded-md bg-gradient-to-r from-[#71b7e6] to-[#9b59b6] hover:shadow-lg hover:translate-y-[-2px] transition-all"
              >
                Sign Up
              </button>
            </div>

            <div className="text-center text-gray-600 mt-4">
              <p>
                Already have an account?
                <a
                  href="/login"
                  className="text-purple-600 font-semibold hover:text-blue-400"
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
