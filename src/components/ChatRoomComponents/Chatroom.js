import React, { useEffect, useRef, useState } from 'react';
import { addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy, limitToLast } from 'firebase/firestore';
import { db, auth } from '../../firebase-config';
import { Button } from 'react-bootstrap';
import { Link, Route, Routes, Outlet } from 'react-router-dom';
import MessagesList from './MessagesList';
import Header from './Header';
import ChatForm from './ChatForm';
import ChatModal from './ChatModal';

const ChatRoom = (props) => {
    const { room } = props;
    const [newMessage, setNewMessage] = useState("");
    const [messages, setMessages] = useState([])
    const [videos, setVideos] = useState([])
    const [gamertags, setGamertags] = useState([])
    const messagesEndRef = useRef(null)

    const messagesRef = collection(db, "messagesChat");
    const videoRef = collection(db, "messageChat")

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
            setMessages(messages)
            console.log(messages)
        })
        return () => unsubscribe();
    }, [room])

    useEffect(() => {
        const videosQuery = query(
            videoRef,
            // orderBy("createdAt", "desc"),
            // limitToLast(20)
        );
        const unsubscribe = onSnapshot(videosQuery, (snapshot) => {
            let videoUrls = [];
            let gamertags = [];
            snapshot.forEach((doc) => {
                videoUrls.push({ ...doc.data().public_url, id: doc.id });
                // gamertags.push(doc.data().gamertag);
            });
            setVideos(videoUrls);
            setGamertags(gamertags);
            console.log(gamertags)
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

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight
        }
    }, [messages])

    return (
        <div className="container mx-auto m-3 ">
            <Header room={room} />
            
            <ChatModal />
            
            <MessagesList messages={messages} videos={videos} gamertags={gamertags} messagesEndRef={messagesEndRef} />
            
            <ChatForm handleSubmit={handleSubmit} newMessage={newMessage} setNewMessage={setNewMessage} />
        </div>
    )
}

export default ChatRoom;
