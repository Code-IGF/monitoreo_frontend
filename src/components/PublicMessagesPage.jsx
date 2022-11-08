import React, { useState, useEffect} from "react";
import axios from "axios";
import Echo from "laravel-echo";
import "pusher-js";
import Messagebox from "./MessageBox";

export default function PublicMessagesPage() {
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
            await axios.post('api/new-message', {
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
        // 2
        axios.defaults.baseURL = "https://code-rm.tk";
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
                    <h1>Public Space</h1>
                    <p>Post your random thoughts for the world to see</p>
                </div>
                <div>
                    {messages.map((message) => (
                        <Messagebox key={message.id} message={message} />
                    ))}
                </div>
                <div>
                    <form onSubmit={(e) => handleSendMessage(e)}>
                        <input
                            type="text"
                            placeholder="Set your username"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            required
                        />
                        <div>
                            <input
                                type="text"
                                placeholder="Type your message..."
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            />
                            <button onClick={(e) => handleSendMessage(e)}>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
    }
    