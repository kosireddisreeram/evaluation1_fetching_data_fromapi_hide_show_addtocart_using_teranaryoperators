import { useState } from "react";
// keep the add to cart component here
const CartButton = () => {
    //manage state of the count
    const[count,setCount] = useState(0);
    const handleInc = () =>{
      setCount(count+1);
    }
    const handleDec = () =>{
      setCount(count-1);
    }
  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <div>
      
      <p className="count-item">{count}</p>
      <button onClick={()=>handleInc()}>+</button>
      <button onClick={()=>handleDec()}>-</button>
      <br/>
  </div>
  

    <div style={{marginTop:"10px"}}>
     <>{count===0 ? <button style={{backgroundColor:"blue"}}>Add to cart</button> : count}</>
      </div>
  


  </>;
};
export default CartButton
