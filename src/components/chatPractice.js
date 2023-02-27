import React, { useEffect, useState } from 'react';
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy, limitToLast } from 'firebase/firestore';
import { db, auth } from '../firebase-config';
import { Button } from 'react-bootstrap';

const ChatPractice = (props) => {
    const { room } = props;
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessage] = useState([])
    const [videos, setVideos] = useState([])

    const messagesRef = collection(db, "messagesChat");
    const videoRef = collection(db, "server_jobs")

    useEffect(() => {
        const queryMessages = query(
            messagesRef,
            where("room", "==", room),
            orderBy("createdAt")
        );
        const unsubscribe = onSnapshot(queryMessages, (snapshot) => {
            let messages = [];
            snapshot.forEach((doc) => {
                messages.push({ ...doc.data(), id: doc.id })
            })
            setMessage(messages)
        })
        return () => unsubscribe();
    }, [room])

    useEffect(() => {
        const videosQuery = query(
            videoRef,
            where("job_status", "==", "complete"),
            // orderBy("createdAt", "desc"),/
            // limitToLast(20)
        );
        const unsubscribe = onSnapshot(videosQuery, (snapshot) => {
            let videoUrls = [];
            // let miniVideoUrls = videoUrls.slice(0, videoUrls.length - 20);
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
        <div className="container mx-auto m-3">
            <div className="display-1 h-100 d-flex align-items-center justify-content-center">
                <h2> Welcome to: {room.toUpperCase()}</h2>
            </div>
            <div className="messages border border-primary border-3 rounded align-items-center mx-2 p-3" style={{ height: "70vh", overflowY: "auto" }}>
                {messages.map((message) => (
                    <div className="message mx-3 mb-3" key={message.id}>
                        <span className="user text-primary">{message.user}: </span>
                        {message.text}
                        {videos.map((videoUrl) => (
                            <video src={videoUrl} className="px-1" style={{ height: "70px", width: "100px" }} controls></video>
                        ))}
                    </div>
                ))}
            </div>
            <form className="container h-100 input-group mb-3 d-flex align-items-center justify-content-center" onSubmit={handleSubmit}>
                <input
                    className="form-control rounded-pill py-4 px-5"
                    placeholder="Type your message here..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                />
                <div className="input-group-append">
                    <button className="btn btn-primary rounded-pill px-4" type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default ChatPractice;
