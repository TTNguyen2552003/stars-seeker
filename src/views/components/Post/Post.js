import "./Post.css"

function Post(props) {
    let body = props.body.map((string) => <p className="body">{string}</p>)
    let figureContent = null
    if (props.figure != null) {
        figureContent = (
            <div className="figure-container">
                <img
                    className="figure"
                    src={props.figure}
                    alt="post figure"
                />
            </div>
        )
    }
    return (
        <div className="post">
            <div className="project-contributor">
                <img
                    className="author-avatar"
                    src={props.authorAvatar}
                    alt="author avatar"
                />
                <div className="author-name-and-role-container">
                    <p className="author-name">{props.authorName}</p>
                    <p className="author-role">{props.authorRole}</p>
                </div>
            </div>
            <div className="title-container">
                <p className="title">{props.title}</p>
            </div>
            <div className="body-container">
                <p className="body">{body}</p>
            </div>
            {figureContent != null && figureContent}
            <div className="date-posted-container">
                <p className="date-posted">{props.datePosted}</p>
            </div>
        </div>
    )
}

export default Post
