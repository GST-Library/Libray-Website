import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import useAuthStore from "./Store/userAuth.store";
import { Helmet } from "react-helmet";

const Login = () => {
    const { loginUser, loading, error, success, user } = useAuthStore(); // Extract authentication store methods and states
    const navigate = useNavigate(); // Hook for navigation

    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });

    // Define form fields dynamically for scalability
    const formFields = [
        { type: "email", name: "email", placeholder: "Email", required: true },
        { type: "password", name: "password", placeholder: "Password", required: true },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prev) => ({
            ...prev,
            [name]: value, // Dynamically update credentials based on field name
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        await loginUser(credentials); // Call login function with user credentials
        if (user) {
            navigate("/"); // Redirect to home on successful login
        }
    };

    return (
        <div className="overflow-x-hidden w-full h-screen bg-header-bg flex items-center justify-center">
            <Helmet>
                <title>Login | Library | SIESGST</title>
            </Helmet>
            <div className="mx-4 sm:mx-16 lg:mx-40 w-full max-w-md">
                <div className="text-center">
                    <div className="flex justify-center text-3xl lg:text-4xl font-bold">
                        <p>Login</p>
                    </div>
                    <div className="mx-auto mt-2 mb-6 border-b-4 border-blue-700 w-24 lg:w-44" />
                </div>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                {success && <p className="text-green-500 text-center mb-4">{success}</p>}
                <form
                    onSubmit={handleSubmit}
                    id="login-form"
                    className="bg-white p-6 border border-gray-300 rounded-2xl shadow-2xl"
                >
                    {formFields.map((field) => (
                        <div key={field.name} className="mb-4">
                            <input
                                type={field.type}
                                name={field.name}
                                value={credentials[field.name] || ""}
                                onChange={handleChange}
                                placeholder={field.placeholder}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required={field.required}
                            />
                        </div>
                    ))}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 bg-blue-500 hover:bg-orange-500 text-white font-bold rounded-lg shadow-lg transition duration-300"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                    <div className="mt-4">
                        <NavLink
                            to="/register"
                            className={({ isActive }) =>
                                `flex justify-center underline text-sm ${
                                    isActive
                                        ? "text-orange-500"
                                        : "text-gray-700 hover:text-orange-500"
                                }`
                            }
                        >
                            Don't have an account?
                        </NavLink>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
