import { Link } from "react-router-dom"

type Props = {
    name: string
    location: string
    rating: number
    fees: string
}

function CollegeCard({ name, location, rating, fees }: Props) {
    return (
        <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">

            <h3 className="text-2xl font-bold mb-3">
                {name}
            </h3>

            <p className="text-gray-600 mb-2">
                Location: {location}
            </p>

            <p className="text-gray-600 mb-2">
                Rating: {rating}
            </p>

            <p className="text-gray-600 mb-4">
                Fees: {fees}
            </p>

            <Link to="/college/1">

                <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                    View Details
                </button>

            </Link>

        </div>
    )
}

export default CollegeCard