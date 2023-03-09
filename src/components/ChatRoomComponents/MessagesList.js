import React from 'react';

const MessageList = ({ messages, videos }) => {
    return (
        <div className="messages border border-primary border-3 rounded align-items-center mx-2 p-3" style={{ height: "70vh", overflowY: "auto" }}>
            {messages.map((message) => (
                <div className="message mx-3 mb-3" key={message.id}>
                    <span className="user text-primary">{message.user}: </span>
                    {message.text}

                </div>
            ))}
            <span className="user text-primary">{videos.gamertag}:</span>
            {videos.map((videoUrl) => (
                <video src={videoUrl} className="px-1" style={{ height: "70px", width: "100px" }} controls></video>
            ))}
        </div>
    );
};

export default MessageList;
