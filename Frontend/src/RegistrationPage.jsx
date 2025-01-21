import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "./Store/userAuth.store";
import { Helmet } from "react-helmet";

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

    const formFields = [
        { type: "text", name: "username", placeholder: "Username", required: true },
        { type: "email", name: "email", placeholder: "Email", required: true },
        { type: "text", name: "fullName", placeholder: "Full Name", required: true },
        { type: "file", name: "avatar", placeholder: "Avatar", required: true },
        { type: "password", name: "password", placeholder: "Password", required: true },
    ];

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
        <div className="overflow-x-hidden w-full h-screen bg-header-bg flex items-center justify-center">
            <Helmet>
                <title>Register | Library | SIESGST</title>
            </Helmet>
            <div className="mx-4 sm:mx-16 lg:mx-40 w-full max-w-md">
                <div className="text-center">
                    <div className="flex justify-center text-3xl lg:text-4xl font-bold">
                        <p>Register</p>
                    </div>
                    <div className="mx-auto mt-2 mb-6 border-b-4 border-blue-700 w-24 lg:w-44" />
                </div>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                {success && <p className="text-green-500 text-center mb-4">{success}</p>}
                <form
                    onSubmit={handleSubmit}
                    id="register-form"
                    className="bg-white p-6 border border-gray-300 rounded-2xl shadow-2xl"
                >
                    {formFields.map((field) => (
                        <div key={field.name} className="mb-4">
                            <input
                                type={field.type}
                                name={field.name}
                                value={field.type !== "file" ? formData[field.name] : undefined}
                                onChange={field.type === "file" ? handleFileChange : handleChange}
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
                        {loading ? "Registering..." : "Register"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
