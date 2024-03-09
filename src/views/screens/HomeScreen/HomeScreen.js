import "./HomeScreen.css"
import CTAButton1 from "../../components/CTAButton/CTAButton1.js"
import Introduction from "../../components/Introduction/Introduction.js"
import introductionFigure1 from "../../../res/introduction-figure-1.jpg"
import introductionFigure2 from "../../../res/introduction-figure-2.jpg"
function HomeScreen() {
    let introduction1 = {
        imageSrc: introductionFigure1,
        title: "Overview of the game",
        body:
            "Stars Seeker is a thrilling action-adventure game set in a vast" +
            " immersive galaxy. Embark " +
            "on an epic journey as you battle formidable foes," +
            "discover hidden treasures, and unravel the mysteries " +
            "of the cosmos. With stunning visuals, dynamic game play, and" +
            " rich storytelling, Galactic Conquest offers an unforgettable " +
            "gaming experience for players of all ages"
    }

    let introduction2 = {
        imageSrc: introductionFigure2,
        title: "Latest update",
        body:
            "Buckle up, space explorers!" +
            'The highly anticipated update for Stars Seeker is finally here! This latest version, dubbed "Echoes of the Nebula," promises a thrilling expansion to the universe. ' +
            "Expect to encounter new star systems teeming with cosmic wonders, uncover the secrets of a mysterious nebula, and pilot a fleet of never-before-seen starships. " +
            "Whether you're a seasoned captain or a fresh recruit, Stars Seeker's latest update has something for every adventurer."
    }

    let data = [introduction1, introduction2]

    let pageContent = data.map((element) => (
        <Introduction
            src={element.imageSrc}
            title={element.title}
            body={element.body}
        />
    ))
    return (
        <div className="home-screen">
            <div className="cta-button-container">
                <CTAButton1 />
            </div>
            {pageContent}
        </div>
    )
}

export default HomeScreen
