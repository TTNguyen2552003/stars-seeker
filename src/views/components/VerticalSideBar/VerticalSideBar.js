import VerticalSection from "./VerticalSection"
import "./VerticalSideBar.css"
import { Link } from "react-router-dom"
import logo from "../../../res/svg/logo.svg"
function VerticalSideBar(props) {
    let changeSectionStates = props.changeSectionStates

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
                    active={props.sectionStates[0]}
                    onClick={() => changeSectionStates("home")}
                />
            </Link>
            <Link to="/post">
                <VerticalSection
                    icon="post"
                    active={props.sectionStates[1]}
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
                    active={props.sectionStates[2]}
                    onClick={() => changeSectionStates("policy")}
                />
            </Link>
        </div>
    )
}

export default VerticalSideBar
