import { useState } from "react"
import VerticalSection from "./VerticalSection"
import "./VerticalSideBar.css"
import { Link } from "react-router-dom"
import logo from "../../../res/svg/logo.svg"
function VerticalSideBar() {
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
        <div className="vertical-side-bar">
            <Link to="/">
                <img
                    src={logo}
                    className="logo"
                    alt="logo"
                    onClick={() => changeSectionStates("home")}
                />
            </Link>
            <Link to="/">
                <VerticalSection
                    icon="home"
                    active={sectionStates[0]}
                    onClick={() => changeSectionStates("home")}
                />
            </Link>
            <Link to="/post">
                <VerticalSection
                    icon="post"
                    active={sectionStates[1]}
                    onClick={() => changeSectionStates("post")}
                />
            </Link>
            {/* <Link to="/discussion">
                <VerticalSection
                    icon="discussion"
                    active={sectionStates[2]}
                    onClick={() => changeSectionStates("discussion")}
                />

            </Link> */}
            <Link to="/policy">
                <VerticalSection
                    icon="policy"
                    active={sectionStates[2]}
                    onClick={() => changeSectionStates("policy")}
                />
            </Link>
        </div>
    )
}

export default VerticalSideBar
