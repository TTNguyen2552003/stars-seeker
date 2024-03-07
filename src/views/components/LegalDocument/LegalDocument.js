import "./LegalDocument.css"

function LegalDocument(props) {
    let body = props.body.map((value) => <p className="legal-document-body">{value}</p>)
    return (
        <div className="legal-document-container">
            <div className="legal-document-title-container">
                <p className="legal-document-title">{props.title}</p>
            </div>
            {body}
        </div>
    )
}

export default LegalDocument
