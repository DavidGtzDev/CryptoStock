export default function MyModal(props) {
  return (
    <div className="my-modal">
        <h4 onClick={e => props.setIsOpen(false)}>X</h4>
        <h2>Mint Apple</h2>
        <h3>Quantity</h3>
        <input type="number"></input>
        <h3>Price</h3>
        <input type="number"></input>
        <div>
            <button>Mint</button>
            <button>Burn</button>
            <button>Buy</button>
            <button>Sell</button>
        </div>
    </div>
  )
}
