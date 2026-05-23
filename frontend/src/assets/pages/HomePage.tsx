import MainLayout from "../layouts/MainLayout"
import CollegeCard from "../components/CollegeCard"
import { Link } from "react-router-dom"

function HomePage() {
    return (
        <MainLayout>

            <div className="min-h-screen bg-gray-100">

                {/* Hero Section */}
                <div className="bg-black text-white py-24 px-8 text-center">

                    <h1 className="text-6xl font-bold mb-6">
                        Find Your Perfect College
                    </h1>

                    <p className="text-xl mb-8 text-gray-300">
                        Compare colleges, explore courses, and make smarter career decisions.
                    </p>

                    <div className="flex justify-center gap-4">

                        <Link to="/colleges">

                            <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
                                Explore Colleges
                            </button>

                        </Link>

                        <Link to="/compare">

                            <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black">
                                Compare Colleges
                            </button>

                        </Link>

                    </div>

                </div>

                {/* Search Section */}
                <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 -mt-10 relative">

                    <h2 className="text-3xl font-bold mb-6 text-center">
                        Search Colleges
                    </h2>

                    <div className="flex gap-4">

                        <input
                            type="text"
                            placeholder="Search by college name..."
                            className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none"
                        />

                        <button className="bg-black text-white px-6 rounded-lg hover:bg-gray-800">
                            Search
                        </button>

                    </div>

                </div>

                {/* Featured Colleges */}
                <div className="max-w-6xl mx-auto py-20 px-8">

                    <h2 className="text-4xl font-bold mb-10 text-center">
                        Featured Colleges
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        <CollegeCard
                            name="IIT Delhi"
                            location="Delhi"
                            rating={4.8}
                            fees="₹2,00,000"
                        />

                        <CollegeCard
                            name="NIT Trichy"
                            location="Tamil Nadu"
                            rating={4.7}
                            fees="₹1,80,000"
                        />

                        <CollegeCard
                            name="IIIT Hyderabad"
                            location="Hyderabad"
                            rating={4.9}
                            fees="₹3,00,000"
                        />

                    </div>

                </div>

            </div>

        </MainLayout>
    )
}

export default HomePage