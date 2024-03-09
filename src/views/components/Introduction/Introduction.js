import Content from "./Content"
import Figure from "./Figure.js"
import "./Introduction.css"
function Introduction(props) {
    return (
        <div className="introduction">
            <Figure src={props.src} />
            <Content
                title={props.title}
                body={props.body}
            />
        </div>
    )
}

export default Introduction
