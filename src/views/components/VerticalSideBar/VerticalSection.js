import "./VerticalSection.css"
import home from "../../../res/svg/home.svg"
import homeActive from "../../../res/svg/home-active.svg"
import post from "../../../res/svg/post.svg"
import postActive from "../../../res/svg/post-active.svg"
import discussion from "../../../res/svg/discussion.svg"
import discussionActive from "../../../res/svg/discussion-active.svg"
import policy from "../../../res/svg/policy.svg"
import policyActive from "../../../res/svg/policy-active.svg"
function VerticalSection(props) {
    let icons = null
    let sectionTitle = null
    switch (props.icon) {
        case "home":
            icons = [home, homeActive]
            sectionTitle = "Home"
            break
        case "post":
            icons = [post, postActive]
            sectionTitle = "Post"
            break
        case "discussion":
            icons = [discussion, discussionActive]
            sectionTitle = "Discussion"
            break
        case "policy":
            icons = [policy, policyActive]
            sectionTitle = "Discussion"
            break
        default:
            icons = [home, homeActive]
            sectionTitle = "Home"
            break
    }

    return (
        <div
            className="vertical-section"
            onClick={props.onClick}
            style={{ boxShadow: props.active ? "inset 2px 0px #00FFFF" : "none" }}
        >
            <img
                src={props.active ? icons[1] : icons[0]}
                alt="home"
            />
            <p
                className="section-title"
                style={{ color: props.active ? "#00FFFF" : "#E1E2E9" }}
            >
                {sectionTitle}
            </p>
        </div>
    )
}

export default VerticalSection
