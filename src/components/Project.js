import React from 'react'
import '../components/Project.css';
import{Row, Col, Container, Nav, Tab} from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from '../assets/img/main.png';
import projImg2 from '../assets/img/ama-proj.png';
import projImg3 from '../assets/img/game-project.png';


function Project() {
    const projects = [
        {
            title: "Personal Portfolio",
            description: "Design & Development",
            imgUrl: projImg1,
            visit: " "
           
        },
        {
            title: "Amazon-Project",
            description: "Design & Development",
            imgUrl: projImg2
        },
        {
            title: "Guess no Game",
            description: "Design & Development",
            imgUrl: projImg3
        },
        {
            title: "Portfolio",
            description: "Design & Development",
            imgUrl: projImg1
        },
        {
            title: "E-commerse",
            description: "Design & Development",
            imgUrl: projImg2
        },
    ]
  return (
   <section className="project" id='project'>
    <Container>
        <Row>
            <Col>
            <h2>Project</h2>
            <p>In this project section you will get all the project and link of my project. Click on GO-TO and visit the Project. </p>

<Tab.Container id='projects-tabs' defaultActiveKey="first">
     <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
      <Nav.Item>
        <Nav.Link eventKey= "first" >Tab 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="second">Tab 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="third" >
          Tab 3
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <Tab.Content>
        <Tab.Pane eventKey='first'>
            <Row>
                {
                    projects.map((project,index) => {
                        return (
                           <ProjectCard key={index}
                           {...project}
                           />
                        )
                    })
                }
            </Row>
        </Tab.Pane>
        <Tab.Pane 
        eventKey="second" ><h2> Upcoming Projects</h2></Tab.Pane>
        <Tab.Pane eventKey="third"> <h2>Upcoming Projects </h2></Tab.Pane>
    </Tab.Content>
    </Tab.Container>

            </Col>
        </Row>
    </Container>
    <img src={colorSharp2} alt="" className='background-image-right' />
   </section>
  )
}

export default Project
