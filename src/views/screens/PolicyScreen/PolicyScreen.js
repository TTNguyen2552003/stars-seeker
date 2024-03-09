import LegalDocument from "../../components/LegalDocument/LegalDocument"
import "./PolicyScreen.css"

function PolicyScreen() {
    let termsAndConditionsBody = [
        "Joining the Stars-Seeker waitlist grants you early access to updates, announcements, and exclusive offers related to the game's release. " +
            "However, it does not guarantee access to the game itself upon launch.",
        "Priority for access to the game upon launch will be determined at the sole discretion of the Stars-Seeker development team. " +
            " Factors such as engagement with promotional materials, participation in community events, and adherence to community guidelines may influence priority status.",
        "Your privacy is important to us. By joining the waitlist, you consent to the collection and use of your personal information in accordance with our Privacy Policy." +
            "We will never share your information with third parties without your explicit consent.",
        "By joining the waitlist, you agree to receive communications from Stars-Seeker via email or other means of contact provided." +
            "You may opt out of these communications at any time by following the instructions included in each message."
    ]

    let privacyPolicyBody = [
        "When you sign up for the Stars-Seeker waitlist, we may collect personal information such as your name, email address, and any additional information you choose to provide.",
        "We may use aggregated data to analyze trends, track user engagement, and improve our services and user experience.",
        "We may share your information with trusted third-party service providers who assist us in operating our website, conducting marketing campaigns, or delivering services to you.",
        "We may disclose your information if required by law or to protect our rights, property, or safety, or the rights, property, or safety of others.",
        "We implement appropriate technical and organizational measures to safeguard your personal information against unauthorized access, disclosure, alteration, or destruction.",
        "Despite our best efforts, no method of transmission over the internet or electronic storage is completely secure. Therefore, we cannot guarantee absolute security of your information."
    ]

    let legalDocument1 = {
        title: "Terms & Conditions",
        body: termsAndConditionsBody
    }

    let legalDocument2 = {
        title: "Privacy Policy",
        body: privacyPolicyBody
    }

    let data = [legalDocument1, legalDocument2]

    let pageContent = data.map((element) => (
        <LegalDocument
            title={element.title}
            body={element.body}
        />
    ))

    return <div className="policy-screen">{pageContent}</div>
}

export default PolicyScreen
