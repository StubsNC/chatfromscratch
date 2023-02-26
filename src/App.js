import React, { useState, useRef } from "react";
import { Auth } from "./components/Auth";
import Chat from "./components/Chat";
import { Button } from 'react-bootstrap';

import Cookies from 'universal-cookie';
const cookies = new Cookies()


function App() {
  const [isAuth, setIsAuth] = useState(cookies.get("auth-token"))
  const [room, setRoom] = useState(null)
  const roomInputRef = useRef(null)

  if (!isAuth) {
    return (
      <div>
        <Auth setISAuth={setIsAuth}/>
      </div>
    );
  }

  return (
    <div>
      {room ? (
        <Chat room={room} />
      ) : (
        <div>
          <label>Enter Room Name:</label>
          <input ref={roomInputRef} />
          <Button color="primary" onClick={() => setRoom(roomInputRef.current.value)}>
            Enter Chat
          </Button>
        </div>
      )}
    </div>
  )
}

export default App;


// 46:06