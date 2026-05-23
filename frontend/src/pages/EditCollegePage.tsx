import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

function EditCollegePage() {

    const { id } = useParams()

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [rating, setRating] = useState("")
    const [fees, setFees] = useState("")

    useEffect(() => {

        fetch(`https://college-discovery-platform-jrxx.onrender.com`)
            .then((response) => response.json())
            .then((data) => {

                const college = data.find((c: any) => c.id === Number(id))

                if (college) {

                    setName(college.name)
                    setLocation(college.location)
                    setRating(college.rating.toString())
                    setFees(college.fees)

                }

            })

    }, [id])

    const handleSubmit = async (e: React.FormEvent) => {

        e.preventDefault()

        const updatedCollege = {
            name,
            location,
            rating: Number(rating),
            fees
        }

        try {

            const response = await fetch(`http://localhost:8081/colleges/${id}`, {

                method: "PUT",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(updatedCollege)

            })

            if (response.ok) {

                navigate("/colleges")

            }

        } catch (error) {

            console.error(error)

        }

    }

    return (

        <MainLayout>

            <div className="min-h-screen bg-gray-100 flex justify-center items-center p-8">

                <div className="bg-white shadow-lg rounded-xl p-10 w-full max-w-xl">

                    <h1 className="text-4xl font-bold mb-8 text-center">
                        Edit College
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="College Name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3"
                            required
                        />

                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            placeholder="Location"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3"
                            required
                        />

                        <input
                            type="number"
                            step="0.1"
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            placeholder="Rating"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3"
                            required
                        />

                        <input
                            type="text"
                            value={fees}
                            onChange={(e) => setFees(e.target.value)}
                            placeholder="Fees"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3"
                            required
                        />

                        <button
                            type="submit"
                            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
                        >
                            Update College
                        </button>

                    </form>

                </div>

            </div>

        </MainLayout>

    )
}

export default EditCollegePage