// const { default: blogData } = require("../data/blog");
import blogData from "../data/blog"

function About({image = "https://via.placeholder.com/215" }) {
    return (
        <aside>
            <img src = {blogData.image} alt= "blog logo"></img>
            <p>{blogData.about}</p>
        </aside>
    )
}
export default About