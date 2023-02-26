import React, { useEffect, useState } from 'react';
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { Button } from 'react-bootstrap';

const Chat = (props) => {
    const { room } = props;
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessage] = useState([])
    const [videos, setVideos] = useState([])

    const messagesRef = collection(db, "messagesChat");
    const videoRef = collection(db, "server_jobs")

    useEffect(() => {
        const queryVideos = query(
            videoRef,

        )
        const queryMessages = query(
            messagesRef,
            where("room", "==", room),
            orderBy("createdAt"))
        const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
            let messages = [];
            snapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id })
            })
            setMessage(messages)
        })

        return () => unsubscribe();
    }, [])

    useEffect(() => {
        const videosQuery = query(
            videoRef,
            where("job_status", "==", "complete")
        );
        const unsubscribe = onSnapshot(videosQuery, (snapshot) => {
            let videoUrls = [];
            snapshot.forEach((doc) => {
                videoUrls.push(doc.data().public_url);
            });
            setVideos(videoUrls);
        });

        return () => unsubscribe();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (newMessage === "") return;

        await addDoc(messagesRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
            room,
        })

        setNewMessage("")
    }

    return (
        <div className='container mx-auto border border-primary border-3 rounded align-items-center'>
            <div className='header h-100 d-flex align-items-center justify-content-center'>
                <h1> Welcome to: {room.toUpperCase()}</h1>
            </div>
            <div className='messages h-100 '>
                {messages.map((message) => (
                    <div className="message" key={message.id}>
                        <span className="user text-muted"> {message.user}: </span>
                        {message.text}
                        {videos.map((videoUrl) => (
                            <video src={videoUrl} style={{ height: "300px", width: "300px" }} controls></video>
                        ))}
                    </div>
                ))}
            </div>
            <form className='header h-100 d-flex align-items-center justify-content-center' onSubmit={handleSubmit}>
                <input
                    className=''
                    placeholder='Type your message here...'
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                />
                <Button variant="primary" type="submit"> Send </Button>
            </form>
        </div>
    )
}

export default Chat;





{/* <div className='messages h-100 '>
                {messages.map((message) => (
                    <div className="message" key={message.id}>
                        <span className="user text-muted"> {message.user}: </span>
                        {message.text}

                    </div>
                ))}
            </div> */}