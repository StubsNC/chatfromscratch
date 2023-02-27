import React, { useState, useRef } from "react";
import { Auth } from "./components/Auth";
import Chat from "./components/Chat";
import { Button, Row, Col, Container } from 'react-bootstrap';


import Cookies from 'universal-cookie';
import ChatPractice from "./components/chatPractice";
const cookies = new Cookies()


function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [room, setRoom] = useState(null)
  const roomInputRef = useRef(null)

  if (!isAuth) {
    return (
      <div>
        <Auth setISAuth={setIsAuth} />
      </div>
    );
  }

  return (
    <div>
      {room ? (
        <ChatPractice room={room} />
      ) : (
        <Container className="p-5">
          <div className="container border border-primary border-3 rounded p-2">
            <Row className="font-weight-bold text-justify p-2 align-items-center">
              <Col xs={4}>
                <label className="mr-2">Enter Room Name:</label>
              </Col>
              <Col xs={8}>
                <div className="input-group">
                  <input type="text" className="form-control" ref={roomInputRef} />
                  <div className="input-group-append">
                    <button className="btn btn-primary" type="button" onClick={() => setRoom(roomInputRef.current.value)}>
                      Enter Chat
                    </button>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      )}
    </div>

  )
}

export default App;


// 46:06