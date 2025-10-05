import React, { useState } from "react";
import { api } from "../../utils/api";

const IAComponent = () => {

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        // Agregar mensaje del usuario al estado
        setMessages([...messages, { role: "user", text: input }]);
        const userMessage = input;
        setInput("");
        console.log(messages)

        try {
            const values = {
                message: userMessage,
            }
            const res = await api("POST", "chatbot", values);
            console.log(res)
        } catch (err) {
            console.error(err);
        }
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
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Escribe un mensaje..."
            />
            <button onClick={sendMessage}>Enviar</button>
        </div>
    )
}

export default IAComponent