import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';


const Chats = () => {

    const [chats, setChats] = useState<number[]>([]);
    const params = useParams();
    const nav = useNavigate();

    const loadChats = () => {
        setChats([1, 2]);
    }

    useEffect(() => {
        loadChats();
    }, []);

    const handleAdd = (e: any) => {
        e.preventDefault();

        setChats([...chats].concat(chats[chats.length - 1] + 1));
    }

    const handleDelete = (id: number) => {
        setChats(chats.filter(x => x !== id));
        if (id === +params.id!) nav('/1'); ``
    }

    return (
        <div className="h-full w-full flex flex-col">
            <div className="h-[10%] w-full bg-slate-800 pt-3 space-x-2 flex">

                {
                    chats.map((x, i) => <>
                        <NavLink
                            key={i}
                            to={'/' + x}
                            className={({ isActive }: { isActive: boolean }) =>
                                "relative rounded-t-lg w-36 h-full hover:cursor-pointer flex justify-center items-center text-xl " + (isActive ? "bg-slate-100  " : "bg-slate-300 border-b border-slate-300 hover:bg-opacity-90 ")
                            }>
                            Chat {x}
                            {
                                +params.id! === x &&
                                (<button onClick={() => handleDelete(x)} className='absolute right-2 text-lg text-white rounded-full w-5 h-5 flex justify-center items-center'>
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 16 16">
                                        <circle cx="8" cy="8" r="8" fill="#fe3155"></circle><polygon fill="#fff" points="11.536,10.121 9.414,8 11.536,5.879 10.121,4.464 8,6.586 5.879,4.464 4.464,5.879 6.586,8 4.464,10.121 5.879,11.536 8,9.414 10.121,11.536"></polygon>
                                    </svg>
                                </button>)
                            }
                        </NavLink>
                    </>)
                }

                <div
                    onClick={handleAdd}
                    className="rounded-t-lg w-14  bg-slate-300 h-full border-b border-slate-300 hover:bg-opacity-90 flex justify-center items-center text-4xl select-none hover:cursor-pointer">
                    +
                </div>

            </div>

            <div className="h-full w-full bg-slate-100 rounded-b-lg rounded-tr-lg overflow-y-scroll">
                <Outlet />
            </div>
        </div>
    );
}

export default Chats;
