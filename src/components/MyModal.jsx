import { useEffect, useState } from "react"

export default function MyModal(props) {

  const [company, setCompany] = useState("")
  const [quantity, setQuantity] = useState()
  const [price, setPrice] = useState()
  
  useEffect(() => {
    if(typeof props.modalData != "undefined"){
      setCompany(props.modalData.Name)
    }
  })

  function handleInputQuantity(e){
    setQuantity(e.target.value)
  }

  function handleInputPrice(e){
    setPrice(e.target.value)
  }

  function handleButton(e){
    //console.log("AAAA")
    let nuArray = props.modalDataArray
    nuArray.push({
      Name: props.modalData.Name,
      Quantity: quantity,
      Close: price,
      Total: "$" + quantity * price,
      Var: "0%"
    })
    props.setModalData(nuArray)

    console.log(props.modalData)
    
  }
  

  return (
    <div className="my-modal">
        <h4 onClick={e => props.setIsOpen(false)}>X</h4>
        <h2>Mint {company}</h2>
        <h3>Quantity</h3>
        <input type="number" onChange={e => handleInputQuantity(e)}></input>
        <h3>Price</h3>
        <input type="number" onChange={e => handleInputPrice(e)}></input>
        <div>
            <button onClick={e => handleButton(e)}>Mint</button>
            <button onClick={e => handleButton(e)}>Burn</button>
            <button onClick={e => handleButton(e)}>Buy</button>
            <button onClick={e => handleButton(e)}>Sell</button>
        </div>
    </div>
  )
}
