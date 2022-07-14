import ChartCard from "../components/ChartCard"
import Navbar from "../components/Navbar"
import AppleLogo from "../../assets/580b57fcd9996e24bc43c516.png"
import MicrosoftLogo from "../../assets/Microsoft-Logo-icon-png-Transparent-Background.png"
import TeslaLogo from "../../assets/Tesla_T_symbol.svg.png"
import MyTable from "../components/MyTable"

export default function MainScreen() {
  const demo = [["Name","Apple","Microsoft","Tesla"],["Quantity","4","4","4"],["Initial Value","6","6","6"],["Close","7","7","7"],["Total","$24","$24","$24"],["Var","0%","0%","0%"]]

  return (
    <div className="Screen">
          <Navbar></Navbar>
          <div className="organizerdivOne">
            <div className="organizerCards">
              <ChartCard logo={AppleLogo}></ChartCard>
              <ChartCard logo={MicrosoftLogo}></ChartCard>
              <ChartCard logo={TeslaLogo}></ChartCard>
            </div>
            <MyTable elements={demo}></MyTable>
            
          </div>
        </div>
  )
}
