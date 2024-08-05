import AboutCard from "../AboutCard/AboutCard"
import PopularPost from "../PopularPost/PopularPost"
import Tag from "../Tag/Tag"
export default function IntroMenu () {
    return(
        <div className="col-lg-4"> 
            <AboutCard />
            <hr />
            <PopularPost />
            <hr />
            <Tag />
        </div>
    )
}