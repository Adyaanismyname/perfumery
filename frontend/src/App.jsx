import { Routes, Route } from "react-router-dom"


import UserHome from "./pages/userHome"
import DatabaseTest from "./components/DatabaseTest"


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<UserHome />} />
            <Route path="/test-db" element={<DatabaseTest />} />
        </Routes>
    )
}

export default App;


