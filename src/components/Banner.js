import React, { useEffect, useState } from 'react'
import {Row, Col, Container } from 'react-bootstrap';
import '../components/Banner.css';
import headerImg from '../assets/img/abhimg.jpg'
import { BsArrowRightCircle } from "react-icons/bs";

function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
const toRotate = ["web Developer", "web Design", "UI/UX Design"];

const [text, setText] =useState('');
const [delta, setDelta] = useState(300 - Math.random() * 100);
const period = 200;

useEffect(() => {
    let ticker = setInterval(() => 
    {
        tick();
    }, delta)

    return () => {clearInterval(ticker)}

}, [text])

const handlePdfButtonClick = () => {
      const pdfLink = '../assets/img/resume.pdf';
      window.open(pdfLink, '_blank');
}

const tick = () => {
    let i= loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1);

    setText(updatedText);
    if(isDeleting){
        setDelta(prevDelta => prevDelta /2)
    }

    if(!isDeleting && updatedText === fullText){
        setIsDeleting(true);
        setDelta(period);
    } else if(isDeleting && updatedText === ''){
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
    }
}

  return (
    <section className="banner" id='home'>
        <Container>
        <Row className='align-item-center'>
            
            <Col xs={12} md={6} xl={7}>
              <span className='tagline'> Welocome to my portfolio</span>
              <h1>{`i am AbhiDiva `} 
              <span className="wrap">
                {text}</span></h1>
              <p>I am Abhishek Kumar. i am a Software Developer Engineer and Full-stack Web-Developer.
            i am intrested in emerging technology and Artificial Intelligence.
              </p>
              
              <button className='btn' onClick={() => handlePdfButtonClick}> let's connect <BsArrowRightCircle size={50} /></button>
            </Col>
            <Col xs={12} md={6} xl={5}>
            <img src={headerImg}alt="Header img" />
            </Col>
        </Row>
        </Container>
    </section>
  )
}

export default Banner
