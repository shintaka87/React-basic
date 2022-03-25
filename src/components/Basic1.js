import React, {useState} from 'react'

const Basic1 = (props) => {
   
    const [product, setProducts] = useState({name:'', price:''})
  return (
    <div>Basic1
       
        <form>
            <input type="text" value={product.name}
            onChange = {evt => setProducts({...product, name:evt.target.value})}></input>
            <input type="text" value={product.price}
            onChange = {evt => setProducts({...product, price:evt.target.value})}></input>
            
            <h1>Product name is {product.name}</h1>
            <h1>Product price is {product.price}</h1>
        </form>
    </div>
  )
}

export default Basic1