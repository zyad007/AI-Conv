import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Message from './Message';
import Response from './Response';
import config from '../config';
interface Bot {
    name: string,
    id: string
}
interface Msg {
    sender: string
    message: string
}
const Chat = () => {
    const nav = useNavigate();
    const params = useParams();
    const [bots, setBots] = useState<Bot[]>([])
    const [message, setMessage] = useState("")
    const [messages, setMessages] = useState<Msg[]>([])
    useEffect(() => {
        loadBots()
        setMessages([])
        // nav(0)
    }, [params])
    async function loadBots() {
        const botsResponse = await fetch(config.BASE_URL + '/chat/' + params.id)
        const bots = await botsResponse.json()
        console.log("bots:")
        console.log(bots)
        setBots(bots)
    }
    function getMessagesHistory() {
        const text = "here is the conversation: \n" + messages.map((m) => m.sender + ": " + m.message)
        // console.log(text)
        return text
    }
    async function sendPrompt() {
        if (!message) return
        let history = getMessagesHistory()
        history = history + "user: " + message + ",\n"
        setMessages(prev => prev.concat({
            message: message,
            sender: "user"
        }))
        setMessage("")
        try {
            for (let bot of bots) {
                console.log(history)
                const botsResponse = await fetch(config.BASE_URL + '/chat/send/' + params.id + '/' + bot.id, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        messages: history
                    })
                })
                if (botsResponse.status !== 200) {
                    throw new Error("")
                }
                const botsResults = await botsResponse.text()
                history = history + bot.name + ": " + botsResults + ",\n"
                setMessages(prev => prev.concat({
                    message: botsResults,
                    sender: bot.name
                }))
            }
        } catch (e) {
            setMessages(prev => prev.concat({
                message: "An error has occured!",
                sender: bots[0].name
            }))
        }
    }
    return (
        <div className="h-full w-full flex flex-col">
            <div className="w-full h-[90%] justify-end items-start overflow-y-scroll border-red-500 p-6">
                {
                    messages.map((m, index) => (
                        m.sender === 'user'
                            ? <Message key={index} text={m.message} />
                            : <Response key={index} text={m.message} sender={m.sender} />
                    ))
                }
            </div>
            <div className="h-[10%] w-full bg-slate-800 py-3">
                <form className="w-full h-full flex space-x-2" onSubmit={(e) => {
                    e.preventDefault();
                    sendPrompt();
                }}>
                    <input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full rounded-lg px-2 focus:outline-none"
                        type="text"
                        placeholder="Message here..."
                    />
                    <button className="w-[10%] bg-white rounded-lg">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Chat;
