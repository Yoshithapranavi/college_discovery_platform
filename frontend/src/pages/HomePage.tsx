import { Link } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"

function HomePage() {

    return (

        <MainLayout>

            <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6">

                <div className="text-center max-w-3xl">

                    <h1 className="text-6xl font-bold text-gray-800 mb-6">
                        CampusCompass
                    </h1>

                    <p className="text-2xl text-gray-600 mb-8">
                        Discover, manage, and explore colleges easily with a modern full-stack platform.
                    </p>

                    <div className="flex justify-center gap-6">

                        <Link
                            to="/colleges"
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
                        >
                            Explore Colleges
                        </Link>

                        <Link
                            to="/add-college"
                            className="bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-black transition"
                        >
                            Add College
                        </Link>

                    </div>

                </div>

            </div>

        </MainLayout>

    )
}

export default HomePage