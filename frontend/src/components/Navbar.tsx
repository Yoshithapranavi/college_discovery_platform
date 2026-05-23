import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="bg-black text-white px-8 py-4 flex justify-between items-center">

            <Link to="/" className="text-2xl font-bold">
                CampusCompass
            </Link>

            <div className="flex items-center gap-6">

                <Link to="/" className="hover:text-gray-300">
                    Home
                </Link>

                <Link to="/colleges" className="hover:text-gray-300">
                    Colleges
                </Link>

                <Link to="/add-college" className="hover:text-gray-300">
                    Add College
                </Link>

                <Link to="/login" className="hover:text-gray-300">
                    Login
                </Link>

                <Link to="/register" className="hover:text-gray-300">
                    Register
                </Link>

            </div>

        </nav>
    )
}

export default Navbar