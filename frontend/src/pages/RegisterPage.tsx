import { useState } from "react"
import MainLayout from "../layouts/MainLayout"
import { Link, useNavigate } from "react-router-dom"

function RegisterPage() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError("")

        if (password !== confirmPassword) {
            setError("Passwords do not match")
            return
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters")
            return
        }

        setLoading(true)

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, password })
            })

            if (response.ok) {
                const data = await response.json()
                localStorage.setItem("user", JSON.stringify(data))
                navigate("/")
            } else {
                const errorData = await response.json()
                setError(errorData.message || "Registration failed")
            }
        } catch (err) {
            console.error(err)
            setError("Something went wrong. Please try again.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <MainLayout>

            <div className="min-h-screen bg-gray-100 flex items-center justify-center">

                <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">

                    <h1 className="text-4xl font-bold text-center mb-8">
                        Register
                    </h1>

                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Name */}
                        <div>

                            <label className="block mb-2 font-semibold">
                                Full Name
                            </label>

                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
                                required
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
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
                                required
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
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
                                required
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
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-black"
                                required
                            />

                        </div>

                        {/* Register Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 disabled:opacity-50"
                        >
                            {loading ? "Creating Account..." : "Create Account"}
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