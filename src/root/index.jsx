import React from 'react'
import { Card } from '../Components/Card'
import { Navbar } from '../Components/Navbar'
import { Context } from '../context/Context'
import { Container } from './style'

export const Root = () => {
  return (    
    <>
    <Context>
        <Container>
           <Navbar/>
           <Card/>
        </Container>
    </Context>
            
    </>
  )
}
