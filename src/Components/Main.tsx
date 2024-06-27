import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import Chat from "./Chat";
import Chats from "./Chats";

const Main = () => {
    return (
        <div className="w-full h-full bg-slate-800 px-2 flex flex-col">

            <Chats />

            
        </div>
    );
}

export default Main;
