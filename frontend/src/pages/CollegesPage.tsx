import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

type College = {
    id: number
    name: string
    location: string
    rating: number
    fees: string
}

function CollegesPage() {

    const [colleges, setColleges] = useState<College[]>([])

    const [search, setSearch] = useState("")

    const navigate = useNavigate()

    const fetchColleges = async () => {

        const response = await fetch("http://localhost:8081/colleges")

        const data = await response.json()

        setColleges(data)
    }

    useEffect(() => {

        fetchColleges()

    }, [])

    const deleteCollege = async (id: number) => {

        try {

            await fetch(`http://localhost:8081/colleges/${id}`, {

                method: "DELETE"

            })

            fetchColleges()

        } catch (error) {

            console.error(error)

        }
    }

    const filteredColleges = colleges.filter((college) =>
        college.name.toLowerCase().includes(search.toLowerCase())
    )

    return (

        <MainLayout>

            <div className="min-h-screen bg-gray-100 p-8">

                <h1 className="text-5xl font-bold mb-8 text-center">
                    Explore Colleges
                </h1>

                <div className="flex justify-center mb-10">

                    <input
                        type="text"
                        placeholder="Search colleges..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full max-w-xl border border-gray-300 rounded-lg px-4 py-3 shadow-sm"
                    />

                </div>

                <div className="grid md:grid-cols-3 gap-8">

                    {filteredColleges.map((college) => (

                        <div
                            key={college.id}
                            className="bg-white shadow-lg rounded-xl p-6"
                        >

                            <h2 className="text-2xl font-bold mb-4">
                                {college.name}
                            </h2>

                            <p className="mb-2">
                                📍 {college.location}
                            </p>

                            <p className="mb-2">
                                ⭐ {college.rating}
                            </p>

                            <p className="mb-4">
                                💰 {college.fees}
                            </p>

                            <div className="flex gap-3">

                                <button
                                    onClick={() => navigate(`/edit-college/${college.id}`)}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => deleteCollege(college.id)}
                                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                                >
                                    Delete
                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </MainLayout>

    )
}

export default CollegesPage