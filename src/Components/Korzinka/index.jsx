import React,{useContext} from 'react'
import { FlowerContext } from '../../context/Context'
import {TableCard} from './style'
import {AiFillPlusCircle,AiFillMinusCircle, AiFillDelete} from 'react-icons/ai'

export const Korzinka = () => {
    const [state,dispatch]=useContext(FlowerContext)
  return (
    <div>

<TableCard>
  <thead>
    <tr>
      <th>Image</th>
      <th>Name</th>
      <th>Price</th>
      <th>Count</th>
      <th>Total</th>
      <th>Delete</th>
      
    </tr>
  </thead>
  <tbody>
   
{
  state?.newProduct.map((value)=>{
    return(
      <tr key={value.id}>
      <td><img src={value.img} height='40' alt="#" /></td>
      <td>{value.name}</td>
      <td>${(value.price-(value.price*value.discount/100)).toFixed()}</td>      
      <td><AiFillMinusCircle onClick={()=>dispatch({type:'minus',payload:{id:value.id}})}  /> 
      {value.quantity} 

      <AiFillPlusCircle onClick={()=>dispatch({type:'plus',payload:{id:value.id}})}/>
      </td>

      <td>${((value.price-(value.price*value.discount/100))*value.quantity).toFixed()}</td>
      <td><AiFillDelete onClick={()=>dispatch({type:'delete',payload:{id:value.id}})}/></td>
    </tr>
    )
  
  })
}
      
    
   
  </tbody>
</TableCard>


        <h4>New Project</h4>
        
    </div>
  )
}
