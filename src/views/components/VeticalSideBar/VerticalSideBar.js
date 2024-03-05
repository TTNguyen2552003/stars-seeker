import { useState } from "react"
import VerticalSection from "./VerticalSection"
import "./VerticalSideBar.css"
function VerticalSideBar() {
    let tempSectionStates = [true, false, false, false]
    let [sectionStates, setSectionStates] = useState(tempSectionStates)

    function changeSectionStates(section) {
        if (section === "home") {
            tempSectionStates.fill(false)
            tempSectionStates[0] = true
            setSectionStates(tempSectionStates)
        } else if (section === "post") {
            tempSectionStates.fill(false)
            tempSectionStates[1] = true
            setSectionStates(tempSectionStates)
        } else if (section === "discussion") {
            tempSectionStates.fill(false)
            tempSectionStates[2] = true
            setSectionStates(tempSectionStates)
        } else if (section === "policy") {
            tempSectionStates.fill(false)
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
