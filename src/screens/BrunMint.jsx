import CompanyCard from "../components/CompanyCard";
import Navbar from "../components/Navbar";
import AppleLogo from "../../assets/580b57fcd9996e24bc43c516.png"
import MicrosoftLogo from "../../assets/Microsoft-Logo-icon-png-Transparent-Background.png"
import TeslaLogo from "../../assets/Tesla_T_symbol.svg.png"

export default function BrunMint() {
  return (
    <div className="Screen">
        <Navbar></Navbar>
        <h1 className="burn-mint-title">Recently Purchased</h1>
        <div className="burn-mint-card-container">
          <CompanyCard logo={AppleLogo} name="Apple"></CompanyCard>
          <CompanyCard logo={MicrosoftLogo} name="Microsoft"></CompanyCard>
          <CompanyCard logo={TeslaLogo} name="Tesla"></CompanyCard>
        </div>
        <h1 className="burn-mint-title">You may also like</h1>
        <div className="burn-mint-card-container">
          <CompanyCard logo={AppleLogo} name="Apple"></CompanyCard>
          <CompanyCard logo={MicrosoftLogo} name="Microsoft"></CompanyCard>
          <CompanyCard logo={TeslaLogo} name="Tesla"></CompanyCard>
          <CompanyCard logo={AppleLogo} name="Apple"></CompanyCard>
          <CompanyCard logo={MicrosoftLogo} name="Microsoft"></CompanyCard>
          <CompanyCard logo={TeslaLogo} name="Tesla"></CompanyCard>
        </div>
    </div>
  )
}
