import React from "react";
import {useState, useEffect} from "react";
function Coin() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [money,setMoney] = useState("");
    const [select,setSelect] = useState("");
    const onChange = (event) => setMoney(event.target.value);
    const onSelect = (event) => setSelect(event.target.value);
    useEffect(()=> {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response)=>response.json())
        .then((json)=>{
          setCoins(json);
          setLoading(false);
        })
    },[]);
  return (
    <div>
        <h1> The Coins! {coins.length}</h1>
        <input placeholder="how much daller" onChange={onChange} type="number"/>
        <h1>{money/select}</h1>
        {loading ? <strong>Loading...</strong> : null}
        <select onChange={onSelect}>
          {coins.map((coin)=><option value={coin.quotes.USD.price} id={coin.symbol} >{coin.name} ({coin.symbol}:{coin.quotes.USD.price}) USD </option>)}
        </select>
        
        <ul>
          {coins.map((coin)=><li>{coin.name} ({coin.symbol}:{coin.quotes.USD.price}) USD </li>)}
        </ul>

    </div>

  );
}

export default Coin;