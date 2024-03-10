import "./HorizontalSection.css"
import home from "../../../res/svg/home.svg"
import homeActive from "../../../res/svg/home-active.svg"
import post from "../../../res/svg/post.svg"
import postActive from "../../../res/svg/post-active.svg"
// import discussion from "../../../res/svg/discussion.svg"
// import discussionActive from "../../../res/svg/discussion-active.svg"
import policy from "../../../res/svg/policy.svg"
import policyActive from "../../../res/svg/policy-active.svg"
function HorizontalSection(props) {
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
        // case "discussion":
        //     icons = [discussion, discussionActive]
        //     sectionTitle = "Discussion"
        //     break
        case "policy":
            icons = [policy, policyActive]
            sectionTitle = "Policy"
            break
        default:
            icons = [home, homeActive]
            sectionTitle = "Home"
            break
    }

    return (
        <div
            className="horizontal-section"
            style={{ borderBottom: props.active ? "1px solid #00FFFF" : "none" }}
            onClick={props.onClick}
        >
            <img
                className="icon"
                src={props.active ? icons[1] : icons[0]}
                alt={props.icon}
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

export default HorizontalSection
