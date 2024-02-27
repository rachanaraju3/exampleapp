import React from "react";
import "./home.css"
import Header from "../../header/header";
import Posts from "../../posts/posts";
import SideBar from "../../sidebar/sidebar";


export default function Home() {
    return (
        <>
        <Header />
        <div className="home">
            <SideBar />
            <Posts />
        </div>
        </>
    )
}