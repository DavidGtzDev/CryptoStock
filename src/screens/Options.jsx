import MyTable from "../components/MyTable";

export default function Options() {
  const tableOneContent = [["Name","Apple","Microsoft","Tesla"],["Closing","4","4","4"],["Opening","6","6","6"],["Max","7","7","7"],["Min","$24","$24","$24"],["Var","0%","0%","0%"]]
  //const tableTwoContent = [["Name"],["Quantity"],["Prime"],["Price"],["Date"]]
  return (
    <div className="Screen">
      <h1 className="options-title">Create</h1>
      <MyTable elements={tableOneContent}></MyTable>
      <h1 className="options-title">Pull</h1>
      <MyTable elements={tableOneContent}></MyTable>
      <h1 className="options-title">Call</h1>
      <MyTable elements={tableOneContent}></MyTable>
    </div>
  )
}
