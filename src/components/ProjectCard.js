import React from 'react'
import { Col } from 'react-bootstrap'

function ProjectCard({title, description, imgUrl, visit}) {
    const handleClick = event => {
       console.log('Link clicked');

       console.log(event.currentTarget);

    }
  return (
    <Col sm={6} md={4}>
    <div className='proj-imgbx'>
        <img src={imgUrl} alt="" />
        <div className="proj-txtx">
            <h4>{title}</h4>
            {/* <span>{description}</span> */}
            <button type='button' onClick={handleClick}>{visit}Go-To</button>
          </div>
       </div>
      
      
       
    </Col>
  )
}

export default ProjectCard
