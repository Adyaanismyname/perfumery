import { Routes, Route } from "react-router-dom"
import UserHome from "./pages/userHome"
import AdminLogin from "./pages/adminLogin"
import AdminHome from "./pages/adminHome"


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<UserHome />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminHome />} />
        </Routes>
    )
}

export default App;


