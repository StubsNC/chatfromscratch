import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const ChatSettingsTab = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission...
    };

    return (
        <div className="container mx-auto m-3">
            <div className="display-1 h-100 d-flex align-items-center justify-content-center">
                <h2>Settings</h2>
            </div>
            <div className="messages border border-primary border-3 rounded align-items-center mx-2 p-3" style={{ height: "70vh", overflowY: "auto" }}>
                <Container className="p-5 w-60">
                    <div className="container border border-primary border-3 rounded p-2">
                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formUsername">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Form.Group>
                            </Row>
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit">
                                Save Changes
                            </Button>
                        </Form>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default ChatSettingsTab;
