import React from "react";
import SideBar from "../../sidebar/sidebar";
import UniquePost from "../../uniquePost/uniquePost";
import "./postPage.css"

export default function PostPage() {
    return (
        <>
            <div className="postPage">
                <SideBar/>
                <UniquePost/>
            </div>
        </>
    )
}