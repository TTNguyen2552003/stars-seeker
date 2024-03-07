import "./Figure.css"
function Figure(props) {
    return (
        <div className="figure-container">
            <img
                src={props.src}
                alt="introduction figure"
                className="figure"
            />
        </div>
    )
}

export default Figure
