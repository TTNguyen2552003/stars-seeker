import { useState } from "react"
import VerticalSection from "./VerticalSection"
import "./VerticalSideBar.css"
import { Link } from "react-router-dom"

function VerticalSideBar() {
    let [sectionStates, setSectionStates] = useState([true, false])

    function changeSectionStates(section) {
        let tempSectionStates = [false, false]

        if (section === "home") {
            tempSectionStates[0] = true
            setSectionStates(tempSectionStates)
        } else if (section === "policy") {
            tempSectionStates[1] = true
            setSectionStates(tempSectionStates)
        }
    }

    return (
        <div className="vertical-side-bar">
            <Link to="/">
                <VerticalSection
                    icon="home"
                    active={sectionStates[0]}
                    onClick={() => changeSectionStates("home")}
                />
            </Link>
            {/* <Link to="/post">
                <VerticalSection
                    icon="post"
                    active={sectionStates[1]}
                    onClick={() => changeSectionStates("post")}
                />
            </Link>
            <Link to="/discussion">
                <VerticalSection
                    icon="discussion"
                    active={sectionStates[2]}
                    onClick={() => changeSectionStates("discussion")}
                />

            </Link> */}
            <Link to="/policy">
                <VerticalSection
                    icon="policy"
                    active={sectionStates[1]}
                    onClick={() => changeSectionStates("policy")}
                />
            </Link>
        </div>
    )
}

export default VerticalSideBar
