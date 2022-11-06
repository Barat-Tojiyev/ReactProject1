

export const reducer=(state,action)=>{
    switch(action.type){
        case 'buy':
          let buyProduct= state.product.map((value)=>value.id ===action.payload.productId && {...value,addtocard:true,quantity:1})
          buyProduct =buyProduct.filter((value)=>value &&value)     
         
          const add=[...state.newProduct,...buyProduct]
          let added =state.product.map((value)=>value.id ===action.payload.productId ? {...buyProduct[0]}:value)
   
          return {...state,newProduct:add,product:added}  

        case 'like' :
          let like= state.product.map((value)=>value.id ===action.payload.id &&{...value,like:!value.like})
          like= like.filter((value)=>value.id &&value.id)          
          let newLike =state.product.map((value)=>value.id ===action.payload.id ? {...like[0]}:value)
          
          return {...state,product:newLike }
        
          case 'minus':
         let minus =state.newProduct.map((value)=>value.id ===action.payload.id && {...value,quantity:value.quantity-1})
         minus=minus.filter((value)=> value.id &&value.id)
         let newMinus =state.newProduct.map((value)=> value.id ===action.payload.id ? {...minus[0]}:value)

          return {...state,newProduct:newMinus}

          case 'plus':
         let plus =state.newProduct.map((value)=>value.id ===action.payload.id && {...value,quantity:value.quantity+1})
         plus=plus.filter((value)=> value.id &&value.id)
         let newPlus =state.newProduct.map((value)=> value.id ===action.payload.id ? {...plus[0]}:value)

          return {...state,newProduct:newPlus}

        case 'delete':
          let delet=state.newProduct.filter((value)=>value.id !== action.payload.id )
          let delProduct=state.product.map((value)=>value.id  !==action.payload.id && {...value,addtocard:false,quantity:0})
          delProduct=delProduct.filter((value)=>value.id&&value.id)
          let newDel=state.product.map((value)=>value.id ===action.payload.id ? {...delProduct[0]}:value)         
          return {...state,newProduct:delet ,product:newDel}
        case 'basket':
         
          return {...state,basket:!state.basket }
        

        default :
        return state.product
}}