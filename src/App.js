import { Route, Routes } from "react-router-dom"
import "./App.css"
import VerticalSideBar from "./views/components/VerticalSideBar/VerticalSideBar.js"
import HomeScreen from "./views/screens/HomeScreen/HomeScreen.js"
import PolicyScreen from "./views/screens/PolicyScreen/PolicyScreen.js"
import PostScreen from "./views/screens/PostScreen/PostScreen.js"
import HorizontalNavigationBar from "./views/components/HorizontalNavigationBar/HorizontalNavigationBar.js"
import { useState } from "react"

function App() {
    let [screenWidth, setScreenWidth] = useState(window.innerWidth)
    window.onresize = () => setScreenWidth(window.innerWidth)

    let [sectionStates, setSectionStates] = useState([true, false, false])
    function changeSectionStates(section) {
        let tempSectionStates = [false, false, false]

        if (section === "home") {
            tempSectionStates[0] = true
            setSectionStates(tempSectionStates)
        } else if (section === "post") {
            tempSectionStates[1] = true
            setSectionStates(tempSectionStates)
        } else if (section === "policy") {
            tempSectionStates[2] = true
            setSectionStates(tempSectionStates)
        }
    }

    return (
        <div className="App">
            {screenWidth >= 768 ? (
                <VerticalSideBar
                    sectionStates={sectionStates}
                    changeSectionStates={changeSectionStates}
                />
            ) : (
                <HorizontalNavigationBar
                    sectionStates={sectionStates}
                    changeSectionStates={changeSectionStates}
                />
            )}
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
                <Route
                    path="/post"
                    element={<PostScreen />}
                />
            </Routes>
        </div>
    )
}

export default App
