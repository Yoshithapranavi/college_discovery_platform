import MainLayout from "../layouts/MainLayout"
import CollegeCard from "../components/CollegeCard"

function SavedCollegesPage() {
    return (
        <MainLayout>

            <div className="min-h-screen bg-gray-100 p-8">

                <h1 className="text-5xl font-bold text-center mb-12">
                    Saved Colleges
                </h1>

                <p className="text-center text-gray-600 mb-10 text-lg">
                    Your bookmarked colleges for future comparison and admission planning.
                </p>

                <div className="grid md:grid-cols-3 gap-8">

                    <CollegeCard
                        name="IIT Delhi"
                        location="Delhi"
                        rating={4.8}
                        fees="₹2,00,000"
                    />

                    <CollegeCard
                        name="IIIT Hyderabad"
                        location="Hyderabad"
                        rating={4.9}
                        fees="₹3,00,000"
                    />

                    <CollegeCard
                        name="BITS Pilani"
                        location="Rajasthan"
                        rating={4.6}
                        fees="₹4,00,000"
                    />

                </div>

            </div>

        </MainLayout>
    )
}

export default SavedCollegesPage