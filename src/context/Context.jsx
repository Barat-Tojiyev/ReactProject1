import { createContext } from "react";
import { useReducer } from "react";
import { mock } from "../data/Data";
import { reducer } from "./reducer";

export const FlowerContext=createContext()

export const Context=({children})=>{

    const [state,dispatch]=useReducer(reducer
    ,
    {
      product:mock,
      newProduct:[],
      basket:false,
    })
    

    return(
      <FlowerContext.Provider value={[state,dispatch]}>
        {children}
      </FlowerContext.Provider>
    )
}