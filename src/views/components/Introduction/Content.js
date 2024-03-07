import "./Content.css"

function Content(props) {
    return (
        <div className="content-container">
            <div className="title-container">
                <p className="title">{props.title}</p>
            </div>
            <div className="body-container">
                <p className="body">{props.body}</p>
            </div>
            <div className="cta-container-2">
                <button className="cta-button-2">
                    <p className="cta-sentence">{props.ctaSentence}</p>
                </button>
            </div>
        </div>
    )
}

export default Content
