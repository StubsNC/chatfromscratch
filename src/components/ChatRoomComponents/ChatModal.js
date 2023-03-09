import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const ChatModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSave = () => {
        // Do something with the form data
        handleClose();
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="mx-2 my-2">
                Chat Settings
            </Button>

            <Modal show={show} onHide={handleClose} className="bg-dark">
                <Modal.Header closeButton>
                    <Modal.Title>Chat Settings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="gamertag" className="form-label">Gamertag</label>
                            <input type="text" className="form-control" id="gamertag" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ChatModal;