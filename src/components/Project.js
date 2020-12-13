import React from 'react'
import { Container,Row,Col,Button,Card } from 'react-bootstrap'

function Project() {
    return (
        <div>
            <Container id="project">
                <Row>
                    <Col>
                    <h1 className="mt=2-text-center">My Projects</h1>
                    </Col>

                </Row>
                <Row>
                    <Col>
                <Card className="mt-2 mb-2">
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                <Card.Title>TODO APP</Card.Title>
                <Card.Text>
              An App to keep track of your daily todos
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</Col>
                </Row>
            </Container>
        </div>
    )
}

export default Project
