import React, { useEffect, useState } from 'react';

type Bot = {
    id: string
    name: string,
}

const BotMenu = () => {
    const [bots, setBots] = useState<Bot[]>([]);

    useEffect(() => {
        loadBots();
    }, [])

    const loadBots = () => {
        setBots([{ name: 'Bot 1', id: '1' }, { name: 'Bot 2', id: '2' }]);
    }

    const addBot = (name: string, id: string) => {
        setBots([...bots].concat({ name, id }));
    }

    return (
        <div className='h-full w-full bg-slate-100 rounded-lg  overflow-y-auto'>

            <div className='h-10 flex justify-center items-center text-xl font-semibold border-b border-slate-300'>
                Agents

                <div>
                    
                </div>
            </div>

            <div className='h-fit w-full'>
                <div className='w-full h-16 bg-slate-200 flex justify-around items-center mb-1'>
                    <div className='w-10 h-10 bg-slate-400 rounded-full'>
                    </div>

                    <div className='text-lg font-semibold'>
                        Bot 1
                    </div>

                    <div className='p-1 hover:bg-slate-100 rounded-lg w-10 h-10 flex justify-center items-center'>
                        <svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                    </div>
                </div>

                <div className='w-full h-16 bg-slate-200 flex justify-around items-center mb-1'>
                    <div className='w-10 h-10 bg-slate-400 rounded-full'>
                    </div>

                    <div className='text-lg font-semibold'>
                        Bot 1
                    </div>

                    <div className='p-1 hover:bg-slate-100 rounded-lg w-10 h-10 flex justify-center items-center'>
                        <svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                    </div>
                </div>
                <div className='w-full h-16 bg-slate-200 flex justify-around items-center mb-1'>
                    <div className='w-10 h-10 bg-slate-400 rounded-full'>
                    </div>

                    <div className='text-lg font-semibold'>
                        Bot 1
                    </div>

                    <div className='p-1 hover:bg-slate-100 rounded-lg w-10 h-10 flex justify-center items-center'>
                        <svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                    </div>
                </div>

                <div className='w-full h-16 bg-slate-200 flex justify-around items-center mb-1'>
                    <div className='w-10 h-10 bg-slate-400 rounded-full'>
                    </div>

                    <div className='text-lg font-semibold'>
                        Bot 1
                    </div>

                    <div className='p-1 hover:bg-slate-100 rounded-lg w-10 h-10 flex justify-center items-center'>
                        <svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                    </div>
                </div>
                <div className='w-full h-16 bg-slate-200 flex justify-around items-center mb-1'>
                    <div className='w-10 h-10 bg-slate-400 rounded-full'>
                    </div>

                    <div className='text-lg font-semibold'>
                        Bot 1
                    </div>

                    <div className='p-1 hover:bg-slate-100 rounded-lg w-10 h-10 flex justify-center items-center'>
                        <svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                    </div>
                </div>

                <div className='w-full h-16 bg-slate-200 flex justify-around items-center mb-1'>
                    <div className='w-10 h-10 bg-slate-400 rounded-full'>
                    </div>

                    <div className='text-lg font-semibold'>
                        Bot 1
                    </div>

                    <div className='p-1 hover:bg-slate-100 rounded-lg w-10 h-10 flex justify-center items-center'>
                        <svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                    </div>
                </div>
                <div className='w-full h-16 bg-slate-200 flex justify-around items-center mb-1'>
                    <div className='w-10 h-10 bg-slate-400 rounded-full'>
                    </div>

                    <div className='text-lg font-semibold'>
                        Bot 1
                    </div>

                    <div className='p-1 hover:bg-slate-100 rounded-lg w-10 h-10 flex justify-center items-center'>
                        <svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                    </div>
                </div>

                <div className='w-full h-16 bg-slate-200 flex justify-around items-center mb-1'>
                    <div className='w-10 h-10 bg-slate-400 rounded-full'>
                    </div>

                    <div className='text-lg font-semibold'>
                        Bot 1
                    </div>

                    <div className='p-1 hover:bg-slate-100 rounded-lg w-10 h-10 flex justify-center items-center'>
                        <svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                    </div>
                </div>
                <div className='w-full h-16 bg-slate-200 flex justify-around items-center mb-1'>
                    <div className='w-10 h-10 bg-slate-400 rounded-full'>
                    </div>

                    <div className='text-lg font-semibold'>
                        Bot 1
                    </div>

                    <div className='p-1 hover:bg-slate-100 rounded-lg w-10 h-10 flex justify-center items-center'>
                        <svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                    </div>
                </div>

                <div className='w-full h-16 bg-slate-200 flex justify-around items-center mb-1'>
                    <div className='w-10 h-10 bg-slate-400 rounded-full'>
                    </div>

                    <div className='text-lg font-semibold'>
                        Bot 1
                    </div>

                    <div className='p-1 hover:bg-slate-100 rounded-lg w-10 h-10 flex justify-center items-center'>
                        <svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                    </div>
                </div>
                <div className='w-full h-16 bg-slate-200 flex justify-around items-center mb-1'>
                    <div className='w-10 h-10 bg-slate-400 rounded-full'>
                    </div>

                    <div className='text-lg font-semibold'>
                        Bot 1
                    </div>

                    <div className='p-1 hover:bg-slate-100 rounded-lg w-10 h-10 flex justify-center items-center'>
                        <svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                    </div>
                </div>
                <div className='w-full h-16 bg-slate-200 flex justify-around items-center mb-1'>
                    <div className='w-10 h-10 bg-slate-400 rounded-full'>
                    </div>

                    <div className='text-lg font-semibold'>
                        Bot 1
                    </div>

                    <div className='p-1 hover:bg-slate-100 rounded-lg w-10 h-10 flex justify-center items-center'>
                        <svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                    </div>
                </div>
                <div className='w-full h-16 bg-slate-200 flex justify-around items-center mb-1'>
                    <div className='w-10 h-10 bg-slate-400 rounded-full'>
                    </div>

                    <div className='text-lg font-semibold'>
                        Bot 1
                    </div>

                    <div className='p-1 hover:bg-slate-100 rounded-lg w-10 h-10 flex justify-center items-center'>
                        <svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                    </div>
                </div>
                

                <div className='w-full h-16 bg-slate-200 flex justify-around items-center mb-1'>
                    <div className='w-10 h-10 bg-slate-400 rounded-full'>
                    </div>

                    <div className='text-lg font-semibold'>
                        Bot 1
                    </div>

                    <div className='p-1 hover:bg-slate-100 rounded-lg w-10 h-10 flex justify-center items-center'>
                        <svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                    </div>
                </div>
                <div className='w-full h-16 bg-slate-200 flex justify-around items-center mb-1'>
                    <div className='w-10 h-10 bg-slate-400 rounded-full'>
                    </div>

                    <div className='text-lg font-semibold'>
                        Bot 1
                    </div>

                    <div className='p-1 hover:bg-slate-100 rounded-lg w-10 h-10 flex justify-center items-center'>
                        <svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                    </div>
                </div>

                <div className='w-full h-16 bg-slate-200 flex justify-around items-center mb-1'>
                    <div className='w-10 h-10 bg-slate-400 rounded-full'>
                    </div>

                    <div className='text-lg font-semibold'>
                        Bot 1
                    </div>

                    <div className='p-1 hover:bg-slate-100 rounded-lg w-10 h-10 flex justify-center items-center'>
                        <svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                    </div>
                </div>
            </div>



        </div>
    );
}

export default BotMenu;
