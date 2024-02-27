import "./sidebar.css"

export default function SideBar() {
    return (
        <div className="sideBar">
            <div className="sideBarItem">
                <span className="sideBarTitle">About Page Turners</span>
                <img src="/images/logo.png" alt="logo"/>
                <p className="sideBarAbout">
                    A place for book lovers to share their love for reading and thoughts.
                </p>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">Categories</span>
                <ul className="sideBarList">
                    <li className="sideBarListItem">
                        cat1
                    </li>
                    <li className="sideBarListItem">
                        cat2
                    </li>
                </ul>
            </div>
        </div>
    )
}