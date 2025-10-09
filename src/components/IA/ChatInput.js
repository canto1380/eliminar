import React, { useState, useRef } from "react";
import { api } from "../../utils/api";
import axios from "axios";
import { Input, Upload, Button, Tooltip, message } from "antd";
import {
    SendOutlined,
    PaperClipOutlined,
    AudioOutlined,
    StopOutlined,
} from "@ant-design/icons";
const { TextArea } = Input;

const ChatInput = ({ onSend, dataUserRegister }) => {

    const [input, setInput] = useState("");
    const [file, setFile] = useState(null);
    const [recording, setRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const audioChunks = useRef([]);

    // 🎤 Iniciar o detener grabación de audio
    const handleAudioRecord = async () => {
        if (recording) {
            // Detener grabación
            mediaRecorder.stop();
            setRecording(false);
            return;
        }

        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const recorder = new MediaRecorder(stream);
            setMediaRecorder(recorder);
            audioChunks.current = [];

            recorder.ondataavailable = (e) => audioChunks.current.push(e.data);

            recorder.onstop = () => {
                const audioBlob = new Blob(audioChunks.current, { type: "audio/webm" });
                const file = new File([audioBlob], "audio_message.webm", {
                    type: "audio/webm",
                });
                setFile(file);
                message.success("🎧 Audio grabado listo para enviar");
            };

            recorder.start();
            setRecording(true);
        } catch (err) {
            console.error("Error accediendo al micrófono:", err);
            message.error("No se pudo acceder al micrófono");
        }
    };
    console.log(dataUserRegister)

    // // 📎 Seleccionar imagen
    // const handleFileChange = (info) => {
    //     console.log(info)
    //     const selectedFile = info.file.originFileObj;
    //     console.log(selectedFile)
    //     setFile(selectedFile);
    //     message.success(`📎 Archivo adjuntado: ${info.file.name}`);
    // };

    // 📎 Seleccionar imagen
    const handleFileChange = (info) => {
        // Cuando se selecciona un archivo, AntD envía info con varios estados
        // Solo tomamos el primero de la lista
        const fileList = info.fileList;
        if (fileList.length > 0) {
            const fileObj = fileList[fileList.length - 1].originFileObj; // el último archivo
            console.log("📁 Archivo seleccionado:", fileObj);
            setFile(fileObj);
            message.success(`📎 Archivo adjuntado: ${fileObj.name}`);
        }
    };

    // 🔄 Si querés permitir limpiar el archivo
    const handleRemoveFile = () => {
        setFile(null);
    };

    // 🚀 Enviar mensaje
    const handleSend = async () => {
        if (!input.trim() && !file) return;

        const formData = new FormData();
        if (input.trim()) {
            formData.append("message", input)
            formData.append('message_type', 'text')
            formData.append('id_usuario',dataUserRegister?.id)
            formData.append('id_assistant',1)
            formData.append('id_chat',1)
            formData.append('status', active)
        }
        if (file) {
            formData.append("file", file)
            formData.append('message_type', 'image')
            formData.append('id_usuario', dataUserRegister?.id)
            formData.append('id_assistant', 1)
            formData.append('id_chat', 1)
            formData.append('status', active)
        };

        try {
            const res = await api("POST", "chatbot", formData);
            // const res = await axios.post("http://localhost:4000/api/chat", formData, {
            //     headers: { "Content-Type": "multipart/form-data" },
            // });

            onSend({
                role: "assistant",
                text: res.data.reply,
            });

            // limpiar inputs
            setInput("");
            setFile(null);
        } catch (error) {
            console.error("❌ Error enviando mensaje:", error);
            message.error("Error enviando mensaje");
        }
    };

    // const sendMessage = async () => {
    //     if (!input.trim() || isLoading) return;

    //     // Agregar mensaje del usuario al estado
    //     setMessages([...messages, { role: "user", text: input }]);
    //     const userMessage = input;
    //     setInput("");
    //     console.log(messages)

    //     try {
    //         const values = {
    //             message: userMessage,
    //         }
    //         console.log(values)
    //         const res = await api("POST", "chatbot", values);
    //         console.log(res)
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                padding: "8px",
                borderTop: "1px solid #eee",
                background: "#fafafa",
            }}
        >
            {/* 📎 Adjuntar imagen */}

            <Upload
                beforeUpload={() => false}
                showUploadList={false}
                accept="image/*"
                onChange={handleFileChange}
                maxCount={1}
            >
                <Tooltip title="Adjuntar imagen">
                    <Button icon={<PaperClipOutlined />} />
                </Tooltip>
            </Upload>
            {
                file && (
                    <div style={{ marginTop: 8 }}>
                        <img
                            src={URL.createObjectURL(file)}
                            alt="preview"
                            style={{ width: 100, height: "auto", borderRadius: 8 }}
                        />
                        <Button
                            type="link"
                            danger
                            size="small"
                            onClick={handleRemoveFile}
                        >
                            Quitar
                        </Button>
                    </div>
                )
            }

            {/* ✍️ Input de texto */}
            <TextArea
                autoSize={{ minRows: 1, maxRows: 4 }}
                placeholder="Escribe un mensaje..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                style={{ flex: 1, margin: "0 8px" }}
                onPressEnter={(e) => {
                    if (!e.shiftKey) {
                        e.preventDefault();
                        handleSend();
                    }
                }}
            />

            {/* 🎤 Micrófono */}
            <Tooltip title={recording ? "Detener grabación" : "Grabar audio"}>
                <Button
                    type={recording ? "primary" : "default"}
                    icon={recording ? <StopOutlined /> : <AudioOutlined />}
                    onClick={handleAudioRecord}
                    danger={recording}
                />
            </Tooltip>

            {/* ➡️ Enviar */}
            <Tooltip title="Enviar mensaje">
                <Button
                    type="primary"
                    icon={<SendOutlined />}
                    onClick={handleSend}
                    style={{ marginLeft: 8 }}
                />
            </Tooltip>
        </div>
    )
}

export default ChatInput