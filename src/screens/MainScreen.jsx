import ChartCard from "../components/ChartCard"
import Navbar from "../components/Navbar"
import AppleLogo from "../../assets/580b57fcd9996e24bc43c516.png"
import MicrosoftLogo from "../../assets/Microsoft-Logo-icon-png-Transparent-Background.png"
import TeslaLogo from "../../assets/Tesla_T_symbol.svg.png"
import MyTable from "../components/MyTable"
import { useState } from "react"
import Backdrop from "../components/Backdrop"
import MyModal from "../components/MyModal"

export default function MainScreen(props) {
  const [data,setData] = useState()
  const [isOpen,setIsOpen] = useState(false)
  const demo = [
    [0, [0, "Name"], [1, "Apple"], [2, "Microsoft"], [3, "Tesla"]],
    [0, [0, "Quantity"], [1, "4"], [2, "5"], [3, "12"]],
    [0, [0, "Close"], [1, "7"], [2, "21"], [3, "32"]],
    [0, [0, "Total"], [1, "$24"], [2, "$14"], [3, "$29"]],
    [0, [0, "Var"], [1, "0%"], [2, "3%"], [3, "6%"]],
  ];

  return (
    <div className="Screen">
          <Navbar></Navbar>
          <div className="organizerdivOne">
            <div className="organizerCards">
              <ChartCard logo={AppleLogo}></ChartCard>
              <ChartCard logo={MicrosoftLogo}></ChartCard>
              <ChartCard logo={TeslaLogo}></ChartCard>
            </div>
            <MyTable elements={demo} setMyPublicData={setData} modalSignal={setIsOpen}></MyTable>
            <Backdrop isOpen={isOpen} child={<MyModal setIsOpen={setIsOpen} modalData={data} setModalData={setData}></MyModal>}></Backdrop>
          </div>
          
        </div>
  )
}
