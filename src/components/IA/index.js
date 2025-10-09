import React, { useState } from "react";
import ChatInput from "./ChatInput";

const IAComponent = ({ dataUserRegister }) => {
    const [messages, setMessages] = useState([]);

    const handleNewMessage = (msg) => {
        setMessages((prev) => [...prev, msg]);
    };

    return (
        <div className="chat-container">
            <div className="messages">
                {messages.map((m, i) => (
                    <div key={i} className={m.role}>
                        <strong>{m.role}:</strong> {m.text}
                    </div>
                ))}
            </div>

            <ChatInput onSend={handleNewMessage} dataUserRegister={dataUserRegister} />
        </div>
    );
};

export default IAComponent;