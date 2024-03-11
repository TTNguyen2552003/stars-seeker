import { Link } from "react-router-dom"
import "./HorizontalNavigationBar.css"
import HorizontalSection from "./HorizontalSection"
function HorizontalNavigationBar(props) {
    let changeSectionStates = props.changeSectionStates

    return (
        <div className="horizontal-navigation-bar">
            <Link to="/">
                <HorizontalSection
                    icon="home"
                    active={props.sectionStates[0]}
                    onClick={() => changeSectionStates("home")}
                />
            </Link>
            <Link to="/post">
                <HorizontalSection
                    icon="post"
                    active={props.sectionStates[1]}
                    onClick={() => changeSectionStates("post")}
                />
            </Link>
            {/* <Link to="/discussion">
                <HorizontalSection
                    icon="discussion"
                    active={sectionStates[2]}
                    onClick={() => changeSectionStates("discussion")}
                />

            </Link> */}
            <Link to="/policy">
                <HorizontalSection
                    icon="policy"
                    active={props.sectionStates[2]}
                    onClick={() => changeSectionStates("policy")}
                />
            </Link>
        </div>
    )
}

export default HorizontalNavigationBar
