import MyTable from "../components/MyTable";
import { useState } from "react"

export default function Options() {
  const [data, setData] = useState()

  const tableOneContent = [
    [0, [0, "Name"],[1,"Apple"], [2,"Microsoft"], [3,"Tesla"]],
    [0, [0,"Closing"], [1,"4"], [2,"4"], [3,"4"]],
    [0,[0,"Opening"],[1,"6"], [2,"6"], [3,"6"]],
    [0,[0,"Max"],[1,"7"], [2,"7"], [3,"7"]],
    [0, [0,"Min"],[1,"$22"], [2,"$22"], [3,"$22"]],
    [0, [0,"Var"],[1,"0%"], [2,"0%"], [3,"0%"]],
  ];
  const tableTwoContent = [
    [1, [0, "Name"]],
    [1, [0, "Quantity"]],
    [1, [0, "Prime"]],
    [1, [0, "Price"]],
    [1, [0, "Date"]],
  ];
  const tableThreeContent = [
    [2, [0, "Name"]],
    [2, [0, "Quantity"]],
    [2, [0, "Prime"]],
    [2, [0, "Price"]],
    [2, [0, "Date"]],
  ];
  return (
    <div className="Screen">
      <h1 className="options-title">Create</h1>
      <MyTable elements={tableOneContent} setMyPublicData={setData}></MyTable>
      <h1 className="options-title">Pull</h1>
      <MyTable elements={tableTwoContent}></MyTable>
      <h1 className="options-title">Call</h1>
      <MyTable elements={tableThreeContent}></MyTable>
    </div>
  )
}
