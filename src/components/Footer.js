import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import  Mailchimp  from '../components/Mailchimp';
import logo from '../assets/img/logo.svg'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import '../components/Footer.css'

function Footer() {
  return (
    <footer className='footer'>
        <Container>
            <Row className="align-item-center">
                <Mailchimp />
                <Col sm={6}>
                 {/* <img src={logo} alt="logo" /> */}
                 <h2>Abhi</h2>
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                        <a href=""><img src={navIcon1} alt="" /></a>
                        <a href=""><img src={navIcon2} alt="" /></a>
                        <a href=""><img src={navIcon3} alt="" /></a>
                    </div>
                    <p>Created by <h4>Abhi-Diva</h4> <span>Under the mini-project</span> </p> 
                </Col>
            </Row>
        </Container>
      
    </footer>
  )
}

export default Footer
