import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import CreateChatModal from '../Modals/CreateChatModal';

export type Chat = {
    id: string,
    name: string
}

const Chats = () => {

    const [chats, setChats] = useState<Chat[]>([]);
    const params = useParams();
    const nav = useNavigate();
    const location = useLocation()

    const [isOpen, setIsOpen] = useState(false);

    const loadChats = () => {
        setChats([{
            id: 'sad',
            name: 'asd'
        }]);

        fetch('http://localhost:3000/chat')
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setChats(result);
            })
            .catch(e => {
                console.log(e);
            })
    }

    useEffect(() => {
        loadChats();
    }, []);

    useEffect(() => {
        if (!chats.length) return nav('/new')

        nav(chats[0].id);
    }, [chats])

    const addChat = async (name: string) => {
        fetch('http://localhost:3000/chat', {
            method: 'POST',
            body: JSON.stringify({
                name: name
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => {
                console.log(res);
                return res.json()
            }
            )
            .then(result => {
                console.log(result);
                setChats(result)
                nav('/' + result[result.length - 1].id)
            })
            .catch(e => {
                console.log(e);
            })
    }

    const handleDelete = (id: string) => {

        fetch('http://localhost:3000/chat/' + id, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                setChats(result)
                if (id === params.id) nav('/' + result[result.length - 1].id);
            })

    }

    return (
        <>
            <CreateChatModal isOpen={isOpen} setIsOpen={setIsOpen} addChat={addChat} />
            <div className="h-full w-full flex flex-col">
                <div className="h-[10%] w-full bg-slate-800 pt-3 space-x-2 flex">

                    {
                        chats.map((x, i) => <>
                            <NavLink
                                key={i}
                                to={'/' + x.id}
                                className={({ isActive }: { isActive: boolean }) =>
                                    "relative rounded-t-lg w-44 h-full hover:cursor-pointer flex justify-center items-center text-xl px-2 " + (isActive ? "bg-slate-100  " : "bg-slate-300 border-b border-slate-300 hover:bg-opacity-90 ")
                                }>
                                <span className='truncate'>{x.name}</span>
                                {
                                    params.id! === x.id &&
                                    (<button onClick={() => handleDelete(x.id)} className='absolute right-2 text-lg text-white rounded-full w-5 h-5 flex justify-center items-center'>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 16 16">
                                            <circle cx="8" cy="8" r="8" fill="#fe3155"></circle><polygon fill="#fff" points="11.536,10.121 9.414,8 11.536,5.879 10.121,4.464 8,6.586 5.879,4.464 4.464,5.879 6.586,8 4.464,10.121 5.879,11.536 8,9.414 10.121,11.536"></polygon>
                                        </svg>
                                    </button>)
                                }
                            </NavLink>
                        </>)
                    }

                    <div
                        onClick={() => { setIsOpen(true) }}
                        className={((location.pathname === '/new') ? 'bg-slate-100 border-b-0' : 'bg-slate-300') + " rounded-t-lg w-14  h-full border-b border-slate-300 hover:bg-opacity-90 flex justify-center items-center text-4xl select-none hover:cursor-pointer "}>
                        +
                    </div>

                </div>

                <div className="h-full w-full bg-slate-100 rounded-b-lg rounded-tr-lg overflow-y-scroll">
                    <Outlet />
                </div>
            </div>
        </>
    );
}

export default Chats;
