import AppleLogo from "../../assets/580b57fcd9996e24bc43c516.png"
import LineSVG from "../../assets/line.svg"

export default function CompanyCard() {
  return (
    <div className="company-card">
        <img src={AppleLogo}></img>
        <h2>Apple</h2>
        <img src={LineSVG}></img>


    </div>
  )
}
