import "./HomeScreen.css"
import CTAButton1 from "../../components/CTAButton/CTAButton1.js"
import Introduction from "../../components/Introduction/Introduction.js"
import sampleImage from "../../../res/sample.jpeg"
function HomeScreen() {
    let imageSrc = sampleImage
    let title = "Overview of the game"
    let body =
        "Stars Seeker is a thrilling action-adventure game set in a vast" +
        " immersive galaxy. Embark " +
        "on an epic journey as you battle formidable foes," +
        "discover hidden treasures, and unravel the mysteries " +
        "of the cosmos. With stunning visuals, dynamic game play, and" +
        " rich storytelling, Galactic Conquest offers an unforgettable " +
        "gaming experience for players of all ages"

    let ctaSentence = "Join the waitlist"

    return (
        <div className="home-screen">
            <div className="cta-button-container-1">
                <CTAButton1 />
            </div>
            <Introduction
                src={imageSrc}
                title={title}
                body={body}
                ctaSentence={ctaSentence}
            />
            <Introduction
                src={imageSrc}
                title={title}
                body={body}
                ctaSentence={ctaSentence}
            />
        </div>
    )
}

export default HomeScreen
