import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "./Store/userAuth.store";

const Register = () => {
    const { registerUser, loading, error, success } = useAuthStore();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        fullName: "",
        avatar: null,
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            avatar: e.target.files[0],
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        Object.keys(formData).forEach((key) => {
            form.append(key, formData[key]);
        });

        await registerUser(form);
        if (success) {
            navigate("/login");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#f3f2ed] font-serif">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-semibold text-center text-black mb-2">Register</h2>
                <div className=" border-b-4 mx-auto w-36  border-blue-700 mb-5"></div>
                {error && <p className="text-red-500 text-center">{error}</p>}
                {success && <p className="text-green-500 text-center">{success}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Username"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#014da1]"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#014da1]"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Full Name"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#014da1]"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="file"
                            name="avatar"
                            onChange={handleFileChange}
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#014da1]"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
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
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
