import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "./Store/userAuth.store";
import { NavLink } from "react-router-dom";
import Register from "./RegistrationPage";


const Login = () => {
  const { loginUser, loading, error, success, user } = useAuthStore();
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(credentials);
    if (user) {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f3f2ed] font-serif">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-black mb-2">
          Login
        </h2>
        <div className=" border-b-4 mx-auto w-36  border-blue-700 mb-5"></div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {success && <p className="text-green-500 text-center">{success}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#014da1]"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#014da1]"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-[#014da1] hover:bg-[#f26d21] text-white font-bold rounded-lg shadow-md transition duration-300"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          
            <div>
              <NavLink
                to="/register" 
                className={({ isActive }) =>
                  `flex justify-center underline text-sm ${
                    isActive
                      ? "text-[#f26d21]"
                      : "text-gray-700 hover:text-[#f26d21]"
                  }`
                }
              >
                Don't have an account
              </NavLink>
            </div>
        
        </form>
      </div>
    </div>
  );
};

export default Login;
