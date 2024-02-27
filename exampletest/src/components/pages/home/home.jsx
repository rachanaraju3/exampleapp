import React from "react";
import "./home.css"
import Header from "../../header/header";
import Posts from "../../posts/posts";

export default function Home() {
    return (
        <>
        <Header />
        <div className="home">
            <Posts />
        </div>
        </>
    )
}