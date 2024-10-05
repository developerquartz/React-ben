import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
export const FacebookHeader = () => {
  return (
    <> 
    <div className="facebok-wrapper">
    <header> 
      <Container fluid>
      <Link to="/">
    <div className="logo-fb-lnading position-absolute w-100">
    
      <img src="../../../assets/images/new-logo-main.png" alt="" className="img-fluid w-100" />
    
    </div>
    </Link>
    </Container>
    </header>
    </div>
    </>
  )
}
