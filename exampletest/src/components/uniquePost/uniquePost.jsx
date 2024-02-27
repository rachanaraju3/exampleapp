import React from "react";
import "./uniquePost.css"

export default function UniquePost() {
    return (
        <>
            <div className="uniquePost">
                <div className="uniquePostWrapper">
                    <h1 className="uniquePostTitle">
                        Hello
                            <div className="editPost">
                                <i class="postIcon far fa-edit"></i>
                                <i class="postIcon far fa-trash-alt"></i>
                            </div>
                    </h1>

                        <img src="/images/background.png" alt="post Image" className="uniquePostImage"/>
                    <div className="uniquePostInfo">
                        <span className="uniquePostAuthor">
                            Author:
                                <b> rachana</b>
                        </span>
                        <span className="uniquePostDate">
                             today
                        </span>

                    </div>

                    <p className="uniquePostDescription">dsfkjfklsjflksdjlsf</p>

                </div>
            </div>
        </>
    )
}