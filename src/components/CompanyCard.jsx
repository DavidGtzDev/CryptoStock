import StockIMG from "../../assets/icons8-stocks-growth-48.png"

export default function CompanyCard(props) {
  function handleOnClick(){
    props.getCompanyData({
      Name: props.name
    })
    props.setIsOpen(true)
  }

  return (
    <div className="company-card">
      <img src={props.logo} className="company-card-logo-img"></img>
      <div className="company-card-subdiv-company-name">
        <h2 onClick={e => handleOnClick()}>{props.name}</h2>
      </div>
      <div className="company-card-subdiv-decoration-line"></div>
      <div className="company-card-subdiv-company-status">
        <img src={StockIMG}></img>
        <h2>10% buy since last week</h2>
      </div>
    </div>
  );
}
