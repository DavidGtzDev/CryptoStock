
import ChartImage from "../../assets/Screenshot_1.png"

export default function ChartCard(props) {
  return (
    <div className="chartcard">
        <img src={props.logo} className="chartcard-logo"></img>
        <img src={ChartImage} className="chartcard-chartImage"></img>
    </div>
  )
}
