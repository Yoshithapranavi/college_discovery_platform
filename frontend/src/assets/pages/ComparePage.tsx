import MainLayout from "../layouts/MainLayout"

function ComparePage() {
    return (
        <MainLayout>

            <div className="min-h-screen bg-gray-100 p-8">

                <h1 className="text-5xl font-bold text-center mb-12">
                    Compare Colleges
                </h1>

                <div className="grid md:grid-cols-3 gap-8">

                    {/* College 1 */}
                    <div className="bg-white rounded-xl shadow-md p-8">

                        <h2 className="text-3xl font-bold mb-6">
                            IIT Delhi
                        </h2>

                        <div className="space-y-4">

                            <p>
                                <span className="font-semibold">Location:</span> Delhi
                            </p>

                            <p>
                                <span className="font-semibold">Rating:</span> 4.8
                            </p>

                            <p>
                                <span className="font-semibold">Fees:</span> ₹2,00,000
                            </p>

                            <p>
                                <span className="font-semibold">Highest Package:</span> ₹1.5 Cr
                            </p>

                            <p>
                                <span className="font-semibold">Average Package:</span> ₹25 LPA
                            </p>

                            <p>
                                <span className="font-semibold">Placement Rate:</span> 95%
                            </p>

                        </div>

                    </div>

                    {/* College 2 */}
                    <div className="bg-white rounded-xl shadow-md p-8">

                        <h2 className="text-3xl font-bold mb-6">
                            NIT Trichy
                        </h2>

                        <div className="space-y-4">

                            <p>
                                <span className="font-semibold">Location:</span> Tamil Nadu
                            </p>

                            <p>
                                <span className="font-semibold">Rating:</span> 4.7
                            </p>

                            <p>
                                <span className="font-semibold">Fees:</span> ₹1,80,000
                            </p>

                            <p>
                                <span className="font-semibold">Highest Package:</span> ₹80 LPA
                            </p>

                            <p>
                                <span className="font-semibold">Average Package:</span> ₹18 LPA
                            </p>

                            <p>
                                <span className="font-semibold">Placement Rate:</span> 92%
                            </p>

                        </div>

                    </div>

                    {/* College 3 */}
                    <div className="bg-white rounded-xl shadow-md p-8">

                        <h2 className="text-3xl font-bold mb-6">
                            IIIT Hyderabad
                        </h2>

                        <div className="space-y-4">

                            <p>
                                <span className="font-semibold">Location:</span> Hyderabad
                            </p>

                            <p>
                                <span className="font-semibold">Rating:</span> 4.9
                            </p>

                            <p>
                                <span className="font-semibold">Fees:</span> ₹3,00,000
                            </p>

                            <p>
                                <span className="font-semibold">Highest Package:</span> ₹1 Cr
                            </p>

                            <p>
                                <span className="font-semibold">Average Package:</span> ₹30 LPA
                            </p>

                            <p>
                                <span className="font-semibold">Placement Rate:</span> 97%
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </MainLayout>
    )
}

export default ComparePage