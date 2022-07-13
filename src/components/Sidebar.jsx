import profilepic from "../../assets/blank-profile-picture-973460__340.jpg"
import positionPic from "../../assets/icons8-stocks-80.png"
import mintPic from "../../assets/icons8-cryptocurrency-64.png"
import buyPic from "../../assets/icons8-buy-for-cash-50.png"
import portfolioPic from "../../assets/icons8-portfolio-50.png"
import popularPic from "../../assets/icons8-star-50.png"
import mailPic from "../../assets/icons8-mail-50.png"
import { NavLink } from "react-router-dom"

export default function Sidebar() {
  return (
    <div id="sidebar">

      <div id="sidebarUser">
        <img src={profilepic}></img>
        <h3>User</h3>
      </div>

      <div id="sidebarSubMenu">
        <h3>Featured</h3>
        <div className="sidebarDoubleSubMenu">
          <img src={positionPic}></img>
          <NavLink to="/" style={{ textDecoration: 'none' , width: "100%"}}>
            <h2 className="sidebar-navlink">My Position</h2>
          </NavLink>
        </div>
        <div className="sidebarDoubleSubMenu">
          <img src={mintPic}></img>
          <NavLink to="/mint_burn" style={{ textDecoration: 'none' , width: "100%"}}>
            <h2 className="sidebar-navlink">Mint/Burn</h2>
          </NavLink>
        </div>
        <div className="sidebarDoubleSubMenu">
          <img src={buyPic}></img>
          <NavLink to="/buy_sell" style={{ textDecoration: 'none' , width: "100%"}}>
            <h2 className="sidebar-navlink">Buy/Sell</h2>
          </NavLink>
        </div>
        <div className="sidebarDoubleSubMenu">
          <img src={positionPic}></img>
          <NavLink to="/options" style={{ textDecoration: 'none' , width: "100%"}}>
            <h2 className="sidebar-navlink">Options</h2>
          </NavLink>
        </div>


        <div id="sidebarSubMenuOne">
          <h3>Tools</h3>
          <div className="sidebarDoubleSubMenu">
            <img src={portfolioPic}></img>
            <NavLink to="/portfolio_automatization" style={{ textDecoration: 'none' , width: "100%"}}>
              <h2 className="sidebar-navlink">Portfolio Automatization</h2>
            </NavLink>
          </div>
          <div className="sidebarDoubleSubMenu">
            <img src={popularPic}></img>
            <NavLink to="/popular" style={{ textDecoration: 'none' , width: "100%"}}>
              <h2 className="sidebar-navlink">Popular</h2>
            </NavLink>
          </div>
          <div className="sidebarDoubleSubMenu">
            <img src={mailPic}></img>
            <NavLink to="/messages" style={{ textDecoration: 'none' , width: "100%"}}>
              <h2 className="sidebar-navlink">Messages</h2>
            </NavLink>
          </div>
        </div>
        
        

      </div>

    </div>
  )
}
