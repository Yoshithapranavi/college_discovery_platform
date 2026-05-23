import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function MainLayout({ children }: any) {

    return (

        <div className="min-h-screen flex flex-col">

            <Navbar />

            <main className="flex-grow">

                {children}

            </main>

            <Footer />

        </div>

    )
}

export default MainLayout