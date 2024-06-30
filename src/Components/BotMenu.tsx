import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import AddBotModal from '../Modals/AddBotModal';
import { withRouter } from '../Hooks/withRouter';

type Bot = {
    id: string
    name: string,
}

const BotMenu = ({ chatId }:
    {
        chatId: string | undefined
    }
) => {
    const [bots, setBots] = useState<Bot[]>([]);

    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation();

    useEffect(() => {
        if (!chatId) return;
        loadBots();
    }, [chatId]);

    const loadBots = () => {
        fetch('http://localhost:3000/chat/' + chatId)
            .then(res => res.json())
            .then(result => {
                setBots(result);
            })
            .catch(e => console.log(e));
    }

    const addBot = (id: string, chatId: string) => {
        let err
        fetch(`http://localhost:3000/chat/${chatId}/add-bot`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                botId: id
            })
        })
            .then(res => {
                res.ok && loadBots();
            })
            .catch(e => {
                err = e
            })
        return err
    }

    return (
        <>
            <AddBotModal isOpen={isOpen} setIsOpen={setIsOpen} addBot={addBot} />
            <div className='h-full w-full bg-slate-100 rounded-lg  overflow-y-auto'>

                <div className='relative w-full h-10 flex justify-center items-center text-xl font-semibold border-b border-slate-300'>
                    Agents

                    {
                        !(location.pathname === '/new') &&
                        <div
                            onClick={() => { setIsOpen(true) }}
                            className='absolute right-3 font-bold hover:bg-slate-400 hover:cursor-pointer select-none bg-slate-300 w-6 h-6 rounded-md justify-center items-center flex'>
                            <svg className='w-4 h-4' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 309.059 309.059">
                                <g>
                                    <g>
                                        <path style={{ fill: '#010002' }} d="M280.71,126.181h-97.822V28.338C182.889,12.711,170.172,0,154.529,0S126.17,12.711,126.17,28.338
v97.843H28.359C12.722,126.181,0,138.903,0,154.529c0,15.621,12.717,28.338,28.359,28.338h97.811v97.843
c0,15.632,12.711,28.348,28.359,28.348c15.643,0,28.359-12.717,28.359-28.348v-97.843h97.822
c15.632,0,28.348-12.717,28.348-28.338C309.059,138.903,296.342,126.181,280.71,126.181z"/>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    }
                </div>

                <div className='h-fit w-full'>

                    {
                        (location.pathname === '/new') ?
                            <div className='flex justify-center items-center'>
                                Select Chat
                            </div>
                            :
                            (
                                (bots.length === 0) ?
                                    <div className='flex justify-center items-center'>
                                        No bots in this chat
                                    </div>
                                    :
                                    bots.map((x, i) =>
                                        <div key={i} className='w-full h-16 bg-slate-200 flex justify-around items-center mb-1'>
                                            <div className='w-10 h-10 bg-slate-400 rounded-full'>
                                            </div>

                                            <div className='text-lg font-semibold truncate w-36'>
                                                {x.name}
                                            </div>

                                            <div className='p-1 hover:bg-slate-100 rounded-lg w-10 h-10 flex justify-center items-center'>
                                                <svg className="feather feather-edit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                                            </div>
                                        </div>
                                    )
                            )
                    }

                </div>



            </div>
        </>
    );
}

export default withRouter(BotMenu);
