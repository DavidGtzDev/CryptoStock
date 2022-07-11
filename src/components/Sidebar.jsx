import profilepic from "../../assets/blank-profile-picture-973460__340.jpg"
import positionPic from "../../assets/icons8-stocks-80.png"
import mintPic from "../../assets/icons8-cryptocurrency-64.png"
import buyPic from "../../assets/icons8-buy-for-cash-50.png"
import portfolioPic from "../../assets/icons8-portfolio-50.png"
import popularPic from "../../assets/icons8-star-50.png"
import mailPic from "../../assets/icons8-mail-50.png"

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
          <h2>My Position</h2>
        </div>
        <div className="sidebarDoubleSubMenu">
          <img src={mintPic}></img>
          <h2>Mint/Burn</h2>
        </div>
        <div className="sidebarDoubleSubMenu">
          <img src={buyPic}></img>
          <h2>Buy/Sell</h2>
        </div>
        <div className="sidebarDoubleSubMenu">
          <img src={positionPic}></img>
          <h2>Options</h2>
        </div>


        <div id="sidebarSubMenuOne">
          <h3>Tools</h3>
          <div className="sidebarDoubleSubMenu">
            <img src={portfolioPic}></img>
            <h2>Portfolio Automatization</h2>
          </div>
          <div className="sidebarDoubleSubMenu">
            <img src={popularPic}></img>
            <h2>Popular</h2>
          </div>
          <div className="sidebarDoubleSubMenu">
            <img src={mailPic}></img>
            <h2>Messages</h2>
          </div>
        </div>
        
        

      </div>

    </div>
  )
}
