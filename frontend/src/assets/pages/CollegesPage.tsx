import { useEffect, useState } from "react"
import MainLayout from "../layouts/MainLayout"
import CollegeCard from "../components/CollegeCard"

type College = {
    id: number
    name: string
    location: string
    rating: number
    fees: string
}

function CollegesPage() {

    const [colleges, setColleges] = useState<College[]>([])

    useEffect(() => {

        fetch(`${import.meta.env.VITE_API_URL}/colleges`)
            .then((response) => response.json())
            .then((data) => setColleges(data))

    }, [])

    return (
        <MainLayout>

            <div className="min-h-screen bg-gray-100 p-8">

                <h1 className="text-5xl font-bold mb-10 text-center">
                    Explore Colleges
                </h1>

                {/* Colleges Grid */}
                <div className="grid md:grid-cols-3 gap-8">

                    {colleges.map((college) => (

                        <CollegeCard
                            key={college.id}
                            name={college.name}
                            location={college.location}
                            rating={college.rating}
                            fees={college.fees}
                        />

                    ))}

                </div>

            </div>

        </MainLayout>
    )
}

export default CollegesPage