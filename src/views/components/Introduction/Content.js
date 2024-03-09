import "./Content.css"
import CTAButton2 from "../CTAButton/CTAButton2"
function Content(props) {
    return (
        <div className="content-container">
            <div className="title-container">
                <p className="title">{props.title}</p>
            </div>
            <div className="body-container">
                <p className="body">{props.body}</p>
            </div>
            <div className="cta-button-container">
                <CTAButton2 />
            </div>
        </div>
    )
}

export default Content
