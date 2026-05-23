import MainLayout from "../layouts/MainLayout"

function CollegeDetailsPage() {
    return (
        <MainLayout>

            <div className="min-h-screen bg-gray-100 p-8">

                {/* College Header */}
                <div className="bg-white rounded-xl shadow-md p-8 mb-8">

                    <h1 className="text-5xl font-bold mb-4">
                        IIT Delhi
                    </h1>

                    <p className="text-gray-600 text-lg mb-2">
                        Location: Delhi, India
                    </p>

                    <p className="text-gray-600 text-lg mb-2">
                        Rating: 4.8
                    </p>

                    <p className="text-gray-600 text-lg">
                        Fees: ₹2,00,000
                    </p>

                </div>

                {/* Overview */}
                <div className="bg-white rounded-xl shadow-md p-8 mb-8">

                    <h2 className="text-3xl font-bold mb-4">
                        Overview
                    </h2>

                    <p className="text-gray-700 leading-8">
                        IIT Delhi is one of the premier engineering institutes in India,
                        known for excellence in academics, research, innovation,
                        and placements. The institute offers undergraduate,
                        postgraduate, and doctoral programs across multiple disciplines.
                    </p>

                </div>

                {/* Courses */}
                <div className="bg-white rounded-xl shadow-md p-8 mb-8">

                    <h2 className="text-3xl font-bold mb-6">
                        Popular Courses
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="border rounded-lg p-4">
                            <h3 className="text-xl font-semibold mb-2">
                                Computer Science
                            </h3>

                            <p className="text-gray-600">
                                Duration: 4 Years
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            <h3 className="text-xl font-semibold mb-2">
                                Mechanical Engineering
                            </h3>

                            <p className="text-gray-600">
                                Duration: 4 Years
                            </p>
                        </div>

                        <div className="border rounded-lg p-4">
                            <h3 className="text-xl font-semibold mb-2">
                                Electrical Engineering
                            </h3>

                            <p className="text-gray-600">
                                Duration: 4 Years
                            </p>
                        </div>

                    </div>

                </div>

                {/* Placements */}
                <div className="bg-white rounded-xl shadow-md p-8 mb-8">

                    <h2 className="text-3xl font-bold mb-4">
                        Placements
                    </h2>

                    <p className="text-gray-700 text-lg mb-2">
                        Highest Package: ₹1.5 Crore
                    </p>

                    <p className="text-gray-700 text-lg mb-2">
                        Average Package: ₹25 LPA
                    </p>

                    <p className="text-gray-700 text-lg">
                        Placement Rate: 95%
                    </p>

                </div>

                {/* Reviews */}
                <div className="bg-white rounded-xl shadow-md p-8">

                    <h2 className="text-3xl font-bold mb-6">
                        Student Reviews
                    </h2>

                    <div className="border-b pb-6 mb-6">

                        <h3 className="text-xl font-semibold mb-2">
                            Rahul Sharma
                        </h3>

                        <p className="text-gray-600 mb-2">
                            Rating: 5/5
                        </p>

                        <p className="text-gray-700">
                            Excellent campus, faculty, and placement opportunities.
                        </p>

                    </div>

                    <div>

                        <h3 className="text-xl font-semibold mb-2">
                            Priya Verma
                        </h3>

                        <p className="text-gray-600 mb-2">
                            Rating: 4.5/5
                        </p>

                        <p className="text-gray-700">
                            Great academic environment and coding culture.
                        </p>

                    </div>

                </div>

            </div>

        </MainLayout>
    )
}

export default CollegeDetailsPage