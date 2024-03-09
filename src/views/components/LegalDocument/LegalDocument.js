import "./LegalDocument.css"

function LegalDocument(props) {
    let body = props.body.map((value) => <p className="legal-document-body">{value}</p>)
    return (
        <div className="legal-document">
            <div className="legal-document-title-container">
                <p className="legal-document-title">{props.title}</p>
            </div>
            <div className="legal-document-body-container">{body}</div>
        </div>
    )
}

export default LegalDocument
