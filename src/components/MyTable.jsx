import { useEffect } from "react";

export default function MyTable(props) {
    const info = props.elements
    let wasAlreadyDone = false

    function handleClickTable(company, myData){
      const comp = company
      const data = myData
      let obj = {}

      for(let i = 0; i < data.length; i++){
        obj[data[i][1][1]] = data[i][comp[0] + 1][1]
      }
      props.setMyPublicData(obj)
    }

    function loadElements() {
      let table = document.querySelectorAll("div.myTable")
      
      
        for (let i = 0; i < info.length; i++) {
          let sub = document.createElement("div");
          let title = document.createElement("h2");
  
          title.append(info[i][1][1]);
          sub.className = "myTokens-sub";
          sub.append(title);
  
          for (let j = 2; j < info[i].length; j++) {
            let el = document.createElement("h3");
            el.append(info[i][j][1]);
            el.onclick = e => handleClickTable(info[i][j], info)
            sub.append(el);
          }
          table[info[i][0]].append(sub);
        }
      
      
    }


  useEffect(() => {
    if(!wasAlreadyDone){
      loadElements()
      wasAlreadyDone = true
    }
  },[])
    
  
  return (
    <div className="myTable" id="my-table-of-elements">
      
    </div>
  )
}
