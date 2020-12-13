import React from 'react'
import {Row,Col,Form,Card,Button,FormControl} from'react-bootstrap'
function Contact() {
    return (
        <div className="container-field bg-primary">
            <Row>
                <Col>
                <h1 className="text-center m-4 text-light"> contact me</h1>
                </Col>
            </Row>
    
        <Col>
        <Form action="https://formspree.io/f/xknpqpwp" metod="POST">
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control name="email" name="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control name="password"  name="Password" />
  </Form.Group>
  
      <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

        </Col>
        </div>
    )
}

export default Contact
