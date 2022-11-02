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
      <td>{value.price}</td>
      <td><AiFillMinusCircle/> 0 <AiFillPlusCircle/></td>
      <td><AiFillDelete/></td>
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
