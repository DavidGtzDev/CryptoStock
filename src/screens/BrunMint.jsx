import CompanyCard from "../components/CompanyCard";
import Navbar from "../components/Navbar";
import AppleLogo from "../../assets/580b57fcd9996e24bc43c516.png"
import MicrosoftLogo from "../../assets/Microsoft-Logo-icon-png-Transparent-Background.png"
import TeslaLogo from "../../assets/Tesla_T_symbol.svg.png"
import { useState, useEffect } from "react";
import MyModal from "../components/MyModal"
import Backdrop from "../components/Backdrop"

export default function BrunMint(props) {
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState()
  const [dataArray, setDataArray] = useState([])

  useEffect(() => {
    
  })
  

  return (
    <div className="Screen">
        <Navbar></Navbar>
        <h1 className="burn-mint-title">Recently Purchased</h1>
        <div className="burn-mint-card-container">
          <CompanyCard logo={AppleLogo} name="Apple" getCompanyData={setData} setIsOpen={setIsOpen}></CompanyCard>
          <CompanyCard logo={MicrosoftLogo} name="Microsoft" getCompanyData={setData} setIsOpen={setIsOpen}></CompanyCard>
          <CompanyCard logo={TeslaLogo} name="Tesla" getCompanyData={setData} setIsOpen={setIsOpen}></CompanyCard>
        </div>
        <h1 className="burn-mint-title">You may also like</h1>
        <div className="burn-mint-card-container">
          <CompanyCard logo={AppleLogo} name="Apple" getCompanyData={setData} setIsOpen={setIsOpen}></CompanyCard>
          <CompanyCard logo={MicrosoftLogo} name="Microsoft" getCompanyData={setData} setIsOpen={setIsOpen}></CompanyCard>
          <CompanyCard logo={TeslaLogo} name="Tesla" getCompanyData={setData} setIsOpen={setIsOpen}></CompanyCard>
          <CompanyCard logo={AppleLogo} name="Apple" getCompanyData={setData} setIsOpen={setIsOpen}></CompanyCard>
          <CompanyCard logo={MicrosoftLogo} name="Microsoft" getCompanyData={setData} setIsOpen={setIsOpen}></CompanyCard>
          <CompanyCard logo={TeslaLogo} name="Tesla" getCompanyData={setData} setIsOpen={setIsOpen}></CompanyCard>
        </div>
        <Backdrop isOpen={isOpen} child={<MyModal setIsOpen={setIsOpen} modalData={data}></MyModal>}></Backdrop>
    </div>
  )
}
