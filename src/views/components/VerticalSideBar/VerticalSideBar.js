import { useState } from "react"
import VerticalSection from "./VerticalSection"
import "./VerticalSideBar.css"

function VerticalSideBar() {
    let [sectionStates, setSectionStates] = useState([true, false, false, false])

    function changeSectionStates(section) {
        let tempSectionStates = [false, false, false, false]

        if (section === "home") {
            tempSectionStates[0] = true
            setSectionStates(tempSectionStates)
        } else if (section === "post") {
            tempSectionStates[1] = true
            setSectionStates(tempSectionStates)
        } else if (section === "discussion") {
            tempSectionStates[2] = true
            setSectionStates(tempSectionStates)
        } else if (section === "policy") {
            tempSectionStates[3] = true
            setSectionStates(tempSectionStates)
        }
    }

    return (
        <div className="vertical-side-bar">
            <VerticalSection
                icon="home"
                active={sectionStates[0]}
                onClick={() => changeSectionStates("home")}
            />
            <VerticalSection
                icon="post"
                active={sectionStates[1]}
                onClick={() => changeSectionStates("post")}
            />
            <VerticalSection
                icon="discussion"
                active={sectionStates[2]}
                onClick={() => changeSectionStates("discussion")}
            />
            <VerticalSection
                icon="policy"
                active={sectionStates[3]}
                onClick={() => changeSectionStates("policy")}
            />
        </div>
    )
}

export default VerticalSideBar
