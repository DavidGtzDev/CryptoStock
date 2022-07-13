import ChartCard from "../components/ChartCard"
import Navbar from "../components/Navbar"
import AppleLogo from "../../assets/580b57fcd9996e24bc43c516.png"
import MicrosoftLogo from "../../assets/Microsoft-Logo-icon-png-Transparent-Background.png"
import TeslaLogo from "../../assets/Tesla_T_symbol.svg.png"
import MyTokens from "../components/MyTokens"

export default function MainScreen() {
  return (
    <div className="Screen">
          <Navbar></Navbar>
          <div className="organizerdivOne">
            <div className="organizerCards">
              <ChartCard logo={AppleLogo}></ChartCard>
              <ChartCard logo={MicrosoftLogo}></ChartCard>
              <ChartCard logo={TeslaLogo}></ChartCard>
            </div>
            <MyTokens></MyTokens>
          </div>
        </div>
  )
}
