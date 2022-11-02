import styled from "styled-components";

export const CardBox =styled.div`
margin-top: 20px;
width: 250px;
padding: 10px 10px;
border: 2px solid #aaa;
border-radius:10px;
overflow: hidden;
`
 CardBox.Img =styled.div`
   height: 200px;
   width:100%;
   
   
 `
 export const MainBox =styled.div`
 display: grid;
 grid-template-columns: repeat(3,auto);

 `
 export const Image=styled.img`
 width: 100%;
 height: 100%;
 `
CardBox.Button=styled.button`
padding: 10px 30px;
width: 90%;
display: block;
margin: 10px auto;
color: #fff;
font-size: 20px;
border-radius: 5px;
background: #46A358;
border: none;

:active{
  transform: scale(0.97);
}
:hover{
  cursor: pointer;
}

`