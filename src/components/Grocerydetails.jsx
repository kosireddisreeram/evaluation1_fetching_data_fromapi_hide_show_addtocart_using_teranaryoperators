import React from "react"
import data from '../data.json'
import GroceryItem from "./GroceryItem";
import "./styles.css";
const GroceryDetails = ()=>{
console.log(data)

    return(
        <>
        <div style={{border:"1px solid black",width:"99%",height:"80px",borderRadius:"5px",margin:"auto"}}>
        <h1 style={{color:"pink" ,textAlign:"center"}}>Groceries</h1>
        </div>
        <h4 style={{textAlign:"start",marginLeft:"10px"}}>Top deals</h4>
        <div className="container">
            {/* map through the data and display the cards */}
          {data.map((item,index)=>{
            return <><GroceryItem key={item.id} {...item}/></>
         
          })}
           
        </div>
        </>
    )
}
export default GroceryDetails