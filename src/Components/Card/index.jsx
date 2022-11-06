import React,{useContext} from 'react'
import { FlowerContext } from '../../context/Context'
import { Korzinka } from '../Korzinka'
import { Description } from '../Navbar/style'
import {CardBox,MainBox,Image} from './style'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
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
                  
                  <Description d='flex' justify='space-between' align='center'>
                  {
                    value.discount ?( <Description h='30px' w='70px' color='#FFF' d='flex' align='center' p='0 5px' bg='#46A358'>13% OFF</Description>): 'Asl narxda '
                  }

                  {
                    value.like ?   ( <Description cursor='pointer' onClick={()=>dispatch({type:'like',payload:{id:value.id}})}>
                    <AiFillHeart/>
                    
                    </Description> ):(  <Description cursor='pointer' onClick={()=>dispatch({type:'like',payload:{id:value.id}})}>
                    <AiOutlineHeart/>
                    
                    </Description>)
                  }
                
                 
                 
                  </Description>
                    
                <CardBox.Img>
                  <Image src={value.img} alt="" />
                </CardBox.Img>
                <Description>{value.name}</Description>
                {
                  value.discount ? ( <Description d='flex'>Price: ${value.price-(value.price*value.discount/100)}  <Description ml='10px' color='red'><del>${value.price}</del></Description></Description>):
                  (<Description>Price: ${value.price}</Description>)
                }
               
                {
                  value.addtocard ? (<CardBox.Button onClick={()=>dispatch({type:'delete',payload:{id:value.id}})}>Cansel</CardBox.Button>):
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


//   price*discount/100