// reusable card component
import React from "react";
import CartButton from "./CartButton";

const GroceryItem = (props) => {
  const {title,imgURL,discount,sellingprice,mrp}=props;
  return(
    <div id="main" style={{border:"1px solid black",borderRadius:"10px",}}>
      <img src={imgURL} alt=""/>
      <p style={{marginBottom:"20px"}}>{title}</p>
      <p>{mrp}</p>
      <p>{sellingprice}</p>
      <p>{discount}</p>
      <CartButton/>

    </div>
  
  )
};
export default GroceryItem;
