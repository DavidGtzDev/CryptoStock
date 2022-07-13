import AppleLogo from "../../assets/580b57fcd9996e24bc43c516.png"
import LineSVG from "../../assets/line.svg"
import StockIMG from "../../assets/icons8-stocks-growth-48.png"

export default function CompanyCard() {
  return (
    <div className="company-card">
      <img src={AppleLogo} className="company-card-logo-img"></img>
      <div className="company-card-subdiv-company-name">
        <h2>Apple</h2>
      </div>
      <div className="company-card-subdiv-decoration-line"></div>
      <div className="company-card-subdiv-company-status">
        <img src={StockIMG}></img>
        <h2>10% buy since last week</h2>
      </div>
    </div>
  );
}
