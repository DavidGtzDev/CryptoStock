import ChartCard from "./components/ChartCard"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import AppleLogo from "../assets/580b57fcd9996e24bc43c516.png"
import MicrosoftLogo from "../assets/Microsoft-Logo-icon-png-Transparent-Background.png"
import TeslaLogo from "../assets/Tesla_T_symbol.svg.png"
import MyTokens from "./components/MyTokens"

function App() {

  return (
   <div id="app">
    <Sidebar></Sidebar>
    <div className="mainScreen">
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
   </div>
  )
}

export default App
