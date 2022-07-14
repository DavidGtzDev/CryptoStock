import { useEffect } from "react";

export default function MyTable(props) {

    function loadElements() {
      let table = document.querySelectorAll("div.myTable")
      
      for(let k = 0; k < table.length; k++){
        for (let i = 0; i < props.elements.length; i++) {
          let sub = document.createElement("div");
          let title = document.createElement("h2");
  
          title.append(props.elements[i][0]);
          sub.className = "myTokens-sub";
          sub.append(title);
  
          for (let j = 1; j < props.elements[i].length; j++) {
            let el = document.createElement("h3");
            el.append(props.elements[i][j]);
            sub.append(el);
          }
          table[k].append(sub);
        }
      }
      
    }


  useEffect(() => {
    
    let table = document.querySelectorAll("div.myTable")
    for(let i = 0; i < table.length; i++){
      table[i].innerHTML = ""
    }
    loadElements()
  },[])
    
  
  return (
    <div className="myTable" id="my-table-of-elements">
    </div>
  )
}
