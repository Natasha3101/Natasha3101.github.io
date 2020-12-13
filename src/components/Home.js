import React from 'react'
import {Row,Col} from 'react-bootstrap';
import {FaInstagram} from "react-icons/fa"
function Home() {
    return (
        <div className="container-field bg-dark">
            <Row>
                <Col>
                    <div className="d-flex justify-content-center align-items-center">
                        <img src="https://avatars3.githubusercontent.com/u/65615063?s=400&v=4" alt="photo"/>
                    </div>
                    </Col>
                <Col>
                <h1 className="d=flex justify-content-center aligns-items-start">Natasha</h1>
               <h2>Web Developer</h2> 
                </Col>
                
          <div>
              <a href="https://google.com" target="_blank">
                  <FaInstagram color="#efefef" fontSize="32px"/></a>
                  </div>
            </Row>

       </div>
    )
}

export default Home;
