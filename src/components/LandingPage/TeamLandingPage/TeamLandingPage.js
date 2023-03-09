import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import christianImage from '../../images/christian.jpg';
import jacobImage from '../../images/jacob.jpg';

function TeamLandingPage() {
    return (
        <Container className="py-5">
            <h1 className="text-center mb-5">Meet The Team</h1>
            <Row>
                <Col md={6} lg={4} className="mb-4">
                    <Card className="h-100 border-0" bg="light">
                        <Card.Img variant="top" src={christianImage} />
                        <Card.Body>
                            <Card.Title className="text-center mb-0">Christian Burke</Card.Title>
                            <Card.Text className="text-center">Backend Developer</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4">
                    <Card className="h-100 border-0" bg="light">
                        <Card.Img variant="top" src={jacobImage} />
                        <Card.Body>
                            <Card.Title className="text-center mb-0">Jacob Stubblefield</Card.Title>
                            <Card.Text className="text-center">Frontend Developer</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default TeamLandingPage;
