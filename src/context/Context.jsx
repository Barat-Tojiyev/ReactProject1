import { createContext } from "react";
import { useReducer } from "react";
import { mock } from "../data/Data";

export const FlowerContext=createContext()

export const Context=({children})=>{

    const [state,dispatch]=useReducer((state,action)=>
    {
      switch(action.type){
        case 'buy':
          let buyProduct= state.product.map((value)=>value.id ===action.payload.productId && {...value,addtocard:true,quantity:1})
          buyProduct =buyProduct.filter((value)=>value &&value)     
         
          const add=[...state.newProduct,...buyProduct]
          let added =state.product.map((value)=>value.id ===action.payload.productId ? {...buyProduct[0]}:value)
          console.log(added,'added');
          return {...state,newProduct:add,product:added}  
          
        case 'basket':
         
          return {...state,basket:!state.basket }
        

        default :
        return state.product
      }
    },
    {
      product:mock,
      newProduct:localStorage.getItem('newProduct') ? [...JSON.parse(localStorage.getItem('newProduct'))]:[],
      basket:false,
    })
    localStorage.setItem('newProduct',JSON.stringify(state.newProduct))   

    return(
      <FlowerContext.Provider value={[state,dispatch]}>
        {children}
      </FlowerContext.Provider>
    )
}