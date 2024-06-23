import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import Chat from "./Chat";
import Chats from "./Chats";

const Main = () => {
    return (
        <div className="w-full h-full bg-slate-800 px-2 flex flex-col">

            <Chats />

            <div className="h-[10%] w-full bg-slate-800 py-3">

                <form className="w-full h-full flex space-x-2">

                    <input
                        className="w-full rounded-lg px-2 focus:outline-none"
                        type="text"
                        placeholder="Message here..."

                    />

                    <button className="w-[10%] bg-white rounded-lg">Send</button>
                </form>

            </div>
        </div>
    );
}

export default Main;
