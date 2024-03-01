
import "./post.css"
import {Link} from "react-router-dom"

export default function Post() {
    return (
        <div className="post">
            <img className="postImage" src="/images/background.png" alt="no_photo"/>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">cat 1 cat 2</span>
                </div>
                <Link to={'/post/randomNum'} className="link">
                    <span className="postTitle">title</span>
                </Link>
                    
                <hr />
                <span className="postDate">
                    today
                </span>
            </div>
            <p className="postSummary"> adfkdfjalkdjkejekjejlel</p>
        </div>
    )
    
    
}