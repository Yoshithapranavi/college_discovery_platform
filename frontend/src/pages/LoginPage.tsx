import MainLayout from "../layouts/MainLayout"
import { Link } from "react-router-dom"

function LoginPage() {
    return (
        <MainLayout>

            <div className="min-h-screen bg-gray-100 flex items-center justify-center">

                <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">

                    <h1 className="text-4xl font-bold text-center mb-8">
                        Login
                    </h1>

                    <form className="space-y-6">

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
                                placeholder="Enter your password"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
                            />

                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800"
                        >
                            Login
                        </button>

                    </form>

                    {/* Register Link */}
                    <p className="text-center mt-6 text-gray-600">

                        Don’t have an account?

                        <Link
                            to="/register"
                            className="text-black font-semibold ml-2"
                        >
                            Register
                        </Link>

                    </p>

                </div>

            </div>

        </MainLayout>
    )
}

export default LoginPage