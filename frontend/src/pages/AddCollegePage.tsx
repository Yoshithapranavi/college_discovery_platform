import { useState } from "react"
import { useNavigate } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

function AddCollegePage() {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [rating, setRating] = useState("")
    const [fees, setFees] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault()

        const newCollege = {
            name,
            location,
            rating: Number(rating),
            fees
        }

        try {

            const response = await fetch("https://college-discovery-platform-jrxx.onrender.com/colleges", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(newCollege)

            })

            if (response.ok) {

                navigate("/colleges")

            } else {

                alert("Failed to add college")

            }

        } catch (error) {

            console.error(error)

            alert("Something went wrong")

        }
    }

    return (

        <MainLayout>

            <div className="min-h-screen bg-gray-100 flex justify-center items-center p-8">

                <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-xl">

                    <h1 className="text-4xl font-bold mb-8 text-center">
                        Add College
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        <div>

                            <label className="block mb-2 font-semibold">
                                College Name
                            </label>

                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                                required
                            />

                        </div>

                        <div>

                            <label className="block mb-2 font-semibold">
                                Location
                            </label>

                            <input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                                required
                            />

                        </div>

                        <div>

                            <label className="block mb-2 font-semibold">
                                Rating
                            </label>

                            <input
                                type="number"
                                step="0.1"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                                required
                            />

                        </div>

                        <div>

                            <label className="block mb-2 font-semibold">
                                Fees
                            </label>

                            <input
                                type="text"
                                value={fees}
                                onChange={(e) => setFees(e.target.value)}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                                required
                            />

                        </div>

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
                        >
                            Add College
                        </button>

                    </form>

                </div>

            </div>

        </MainLayout>

    )
}

export default AddCollegePage