import MyTable from "../components/MyTable";

export default function Options() {
  const tableOneContent = [[0,"Name","Apple","Microsoft","Tesla"],[0,"Closing","4","4","4"],[0,"Opening","6","6","6"],[0,"Max","7","7","7"],[0,"Min","$24","$24","$24"],[0,"Var","0%","0%","0%"]]
  const tableTwoContent = [[1,"Name"],[1,"Quantity"],[1,"Prime"],[1,"Price"],[1,"Date"]]
  const tableThreeContent = [[2,"Name"],[2,"Quantity"],[2,"Prime"],[2,"Price"],[2,"Date"]]
  return (
    <div className="Screen">
      <h1 className="options-title">Create</h1>
      <MyTable elements={tableOneContent}></MyTable>
      <h1 className="options-title">Pull</h1>
      <MyTable elements={tableTwoContent}></MyTable>
      <h1 className="options-title">Call</h1>
      <MyTable elements={tableThreeContent}></MyTable>
    </div>
  )
}
