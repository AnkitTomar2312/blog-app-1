import "./sidebar.css"

export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABBOUT ME</span>
            <img src="https://i.pinimg.com/550x/7a/22/3c/7a223c18b7f07a0afb80fc25d2b05fda.jpg" alt=""></img>
            <p>Irure ad nulla quis anim tempor cillum occaecat
            commodo eiusmod consequat pariatur laborum mollit.
            Dolor minim tempor minim sit id do eu exercitation
            tempor id. </p>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>

                </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className=" sidebarIcon fa-brands fa-twitter"></i>
            <i className=" sidebarIcon fa-brands fa-pinterest"></i>
            <i className=" sidebarIcon fa-brands fa-square-instagram"></i>
            <i className=" sidebarIcon fa-brands fa-facebook"></i>
            </div>
            </div>
        </div>
    </div>
  )
}
