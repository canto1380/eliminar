import React, { useState } from "react";

const IAComponent = () => {

    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [threadId, setThreadId] = useState(null);

    const sendMessage = async () => {
        if (!input.trim()) return;

        // Agregar mensaje del usuario al estado
        setMessages([...messages, { role: "user", text: input }]);
        const userMessage = input;
        setInput("");

        try {
            const values = {
                message: userMessage,
                threadId,
            }
            const res = await api("POST", "diaParada", values);
            setThreadId(res.data.threadId);
            setMessages((prev) => [
                ...prev,
                { role: "assistant", text: res.data.reply },
            ]);
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