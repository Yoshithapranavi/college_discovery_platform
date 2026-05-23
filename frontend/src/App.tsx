import { Routes, Route } from "react-router-dom"

import HomePage from "./pages/HomePage"
import CollegesPage from "./pages/CollegesPage"
import CollegeDetailsPage from "./pages/CollegeDetailsPage"
import ComparePage from "./pages/ComparePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import SavedCollegesPage from "./pages/SavedCollegesPage"
import AddCollegePage from "./pages/AddCollegePage"
import EditCollegePage from "./pages/EditCollegePage"

function App() {

  return (

    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/colleges" element={<CollegesPage />} />

      <Route path="/college/:id" element={<CollegeDetailsPage />} />

      <Route path="/compare" element={<ComparePage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />

      <Route path="/saved" element={<SavedCollegesPage />} />

      <Route path="/add-college" element={<AddCollegePage />} />
      <Route path="/edit-college/:id" element={<EditCollegePage />} />

    </Routes>

  )
}

export default App