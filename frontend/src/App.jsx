import { Routes, Route } from "react-router-dom"


import UserHome from "./pages/userHome"


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<UserHome />} />
        </Routes>
    )
}

export default App;


