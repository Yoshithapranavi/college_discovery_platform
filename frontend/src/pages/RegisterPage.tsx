import MainLayout from "../layouts/MainLayout"
import { Link } from "react-router-dom"

function RegisterPage() {
    return (
        <MainLayout>

            <div className="min-h-screen bg-gray-100 flex items-center justify-center">

                <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">

                    <h1 className="text-4xl font-bold text-center mb-8">
                        Register
                    </h1>

                    <form className="space-y-6">

                        {/* Name */}
                        <div>

                            <label className="block mb-2 font-semibold">
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
                            />

                        </div>

                        {/* Email */}
                        <div>

                            <label className="block mb-2 font-semibold">
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
                            />

                        </div>

                        {/* Password */}
                        <div>

                            <label className="block mb-2 font-semibold">
                                Password
                            </label>

                            <input
                                type="password"
                                placeholder="Create a password"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
                            />

                        </div>

                        {/* Confirm Password */}
                        <div>

                            <label className="block mb-2 font-semibold">
                                Confirm Password
                            </label>

                            <input
                                type="password"
                                placeholder="Confirm your password"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
                            />

                        </div>

                        {/* Register Button */}
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800"
                        >
                            Create Account
                        </button>

                    </form>

                    {/* Login Link */}
                    <p className="text-center mt-6 text-gray-600">

                        Already have an account?

                        <Link
                            to="/login"
                            className="text-black font-semibold ml-2"
                        >
                            Login
                        </Link>

                    </p>

                </div>

            </div>

        </MainLayout>
    )
}

export default RegisterPage