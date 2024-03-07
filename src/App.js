import "./App.css"
import VerticalSideBar from "./views/components/VerticalSideBar/VerticalSideBar.js"
import HomeScreen from "./views/screens/HomeScreen/HomeScreen.js"
function App() {
    return (
        <div className="App">
            <VerticalSideBar />
            <HomeScreen />
        </div>
    )
}

export default App
