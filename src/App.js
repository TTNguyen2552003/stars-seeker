import { Route, Routes } from "react-router-dom"
import "./App.css"
import VerticalSideBar from "./views/components/VerticalSideBar/VerticalSideBar.js"
import HomeScreen from "./views/screens/HomeScreen/HomeScreen.js"
import PolicyScreen from "./views/screens/PolicyScreen/PolicyScreen.js"
function App() {
    return (
        <div className="App">
            <VerticalSideBar />

            <Routes>
                <Route
                    path="/"
                    element={<HomeScreen />}
                />
                <Route
                    path="/home"
                    element={<HomeScreen />}
                />
                <Route
                    path="/policy"
                    element={<PolicyScreen />}
                />
            </Routes>
        </div>
    )
}

export default App
