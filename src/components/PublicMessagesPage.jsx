import React, { useState, useEffect} from "react";
import Echo from "laravel-echo";
import "pusher-js";
import Messagebox from "./MessageBox";
import AuthUser from "./AuthUser";
import { 
    Paper
 } from "@mui/material";
import { blue } from '@mui/material/colors';

export default function PublicMessagesPage() {
    const {http}=AuthUser();
    // 3
    const [user, setUser] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    
    async function handleSendMessage(e) {
        // 1
        e.preventDefault();
        // 2
        if (!user) {
            alert('Please add your username');
            return;
        }
        // 3
        if (!message) {
            alert('Please add a message');
            return;
        }
        try {
            // 4
            await http.post('/new-message', {
                user: user,
                message: message,
             });
        } catch (error) {
        console.error(error);
        }
    }

    //Escuchar Eventos

    // 1
    useEffect(() => {
        // 3
        const echo = new Echo({
            broadcaster: 'pusher',
            key: "ASDASD2222",
            cluster: "mt1",
            forceTLS: false,
            wsHost: "code-rm.tk",
            auth: {
                headers: {
                  // Authorization: `Bearer ${token}`,
                  Accept: 'application/json',
                },
              },
            wsPort:443,
            disableStats: true,
            encrypted: false,
        });
        // 4
        echo
            .channel('home')
            .subscribed(() => {
            console.log('You are subscribed');
        })
        // 5
        .listen('NewMessage', (data) => {
        // 6
            setMessages((oldMessages) => [...oldMessages, data]);
            setMessage('');
            console.log(data);
        });
    }, []);

    // 4
    return (
        <div>
            <div>
                <div>
                    <hr/>
                    <Paper
                        className="mb-3" 
                        square={true} 
                        elevation={3}
                        sx={{ 
                            bgcolor: blue[600] 
                        }}
                    >
                        <div className="text-center text-white fw-bold fs-6">
                            <h2>Sala de Mensajeria</h2>
                        </div>
                    </Paper>
                        <center><p>Escribe tu mensaje para que todos los demas miembros lo vean</p></center>
                </div>

                <div>
                    {messages.map((message) => (
                        <Messagebox key={message.id} message={message} />
                    ))}
                </div>

                <div>

                    <div>
                        <center>
                            <form onSubmit={(e) => handleSendMessage(e)}>
                                <label>Usuario:&nbsp;</label>
                                <input
                                    type="text"
                                    placeholder="Ingresa tu usuario"
                                    value={user}
                                    onChange={(e) => setUser(e.target.value)}
                                    required     
                                />
                                <label>&nbsp;&nbsp;</label>
                                <input
                                    type="text"
                                    placeholder="Mensaje..."
                                    size="60"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                                <label>&nbsp;&nbsp;&nbsp;</label>
                                <button  onClick={(e) => handleSendMessage(e)}>&nbsp;Enviar&nbsp;</button>
                            </form>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
    }
    