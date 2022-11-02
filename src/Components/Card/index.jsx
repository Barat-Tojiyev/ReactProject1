import React,{useContext} from 'react'
import { FlowerContext } from '../../context/Context'
import { Korzinka } from '../Korzinka'
import { Description } from '../Navbar/style'
import {CardBox,MainBox,Image} from './style'

export const Card = () => {

  const[state,dispatch]=useContext(FlowerContext)
  return (
    <div>
      <MainBox>

       {
        state.basket ? <Korzinka/>:
        (
          
            state.product.map((value)=>{
              return(
                <CardBox key={value.id}>
                <CardBox.Img>
                  <Image src={value.img} alt="" />
                </CardBox.Img>
                <Description>{value.name}</Description>
                <Description>Price: ${value.price}</Description>
                {
                  value.addtocard ? (<CardBox.Button>Cansel</CardBox.Button>):
                  (<CardBox.Button onClick={()=>dispatch({type:'buy',payload:{productId:value.id}})}>Buy</CardBox.Button>)
                }                
                 
              </CardBox>
              )
            })
          
        )
       }
     
      </MainBox>
    </div>
  )
}
