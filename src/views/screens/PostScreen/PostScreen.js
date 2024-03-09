import "./PostScreen.css"
import Post from "../../components/Post/Post.js"
import authorAvatar1 from "../../../res/author-avatar-1.jpg"
import authorAvatar2 from "../../../res/author-avatar-2.jpg"
import postFigure1 from "../../../res/post-figure-1.jpg"
function PostScreen() {
    let body1 = [
        "Calling all space explorers! " +
            "We're excited to announce an upcoming update for Stars Seeker that addresses some of the community's most requested fixes. " +
            "Our development team has been diligently working behind the scenes to ensure a smoother gameplay experience for all captains.",
        "This update will focus primarily on resolving visual inconsistencies with various 3D assets within the game. " +
            "You can expect improvements to textures, lighting, and collision detection, resulting in a more polished and immersive spacefaring adventure. " +
            "We appreciate your patience and feedback, and we're confident that this update will elevate Stars Seeker to new heights!"
    ]

    let body2 = [
        "Gear up, pilots! " +
            "The Stars Seeker armory is expanding with the arrival of the all-new Gatling! " +
            "This powerful weapon promises to shake up your combat strategies and dominate the battlefield. " +
            "We're keeping the details under wraps for now, but get ready to unleash some serious firepower when the next update drops. " +
            "Stay tuned, spacefarers, and prepare for an explosive addition to your arsenal!"
    ]

    let body3 = [
        "Attention, captains! " +
            "Get ready to adapt your tactics, because a new update for Stars Seeker is on the horizon, and it brings a fresh set of gameplay mechanics to the table! " +
            "We're excited to introduce a series of new rules designed to enhance strategic depth and create even more dynamic battles.",
        "The specifics of these new rules are still under wraps, but we can assure you they'll challenge veterans and newcomers alike. " +
            "We're eager to see how these changes impact the way you approach space combat and exploration. " +
            "Stay tuned, spacefarers, for a full reveal of the new rules and how they'll revolutionize your Stars Seeker experience!"
    ]

    let post1 = {
        authorAvatar: authorAvatar1,
        authorName: "Florence",
        authorRole: "3D artist",
        title: "Attention Space Cadets: Stars Seeker Update Incoming!",
        body: body1,
        figure: postFigure1,
        datePosted: "January 2 2023"
    }

    let post2 = {
        authorAvatar: authorAvatar2,
        authorName: "Emilia",
        authorRole: "Developer",
        title: "New Weapon Incoming in Stars Seeker",
        body: body2,
        figure: null,
        datePosted: "January 2 2023"
    }

    let post3 = {
        authorAvatar: authorAvatar1,
        authorName: "Anastasia",
        authorRole: "Director",
        title: "New Rules Shake Up Stars Seeker!",
        body: body3,
        figure: null,
        datePosted: "January 2 2023"
    }

    let data = [post1, post2, post3]

    let pageContent = data.map((element) => (
        <Post
            authorAvatar={element.authorAvatar}
            authorName={element.authorName}
            authorRole={element.authorRole}
            title={element.title}
            body={element.body}
            figure={element.figure}
            datePosted={element.datePosted}
        />
    ))
    return <div className="post-screen">{pageContent}</div>
}

export default PostScreen
