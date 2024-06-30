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

    const removeBot = (id: string) => {
        fetch(`http://localhost:3000/chat/${chatId}/remove-bot/${id}`, {
            method: 'DELETE'
        })
        .then(x => {
            if(x.ok) {
                loadBots();
            }
        })
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

                                            <div className='text-lg font-semibold truncate w-28'>
                                                {x.name}
                                            </div>

                                            <div className='p-1 hover:bg-slate-100 rounded-lg w-7 h-7 flex justify-center items-center'
                                                onClick={() => removeBot(x.id)}
                                            >
                                                <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408.483 408.483"><g><g><path d="M87.748,388.784c0.461,11.01,9.521,19.699,20.539,19.699h191.911c11.018,0,20.078-8.689,20.539-19.699l13.705-289.316H74.043L87.748,388.784z M247.655,171.329c0-4.61,3.738-8.349,8.35-8.349h13.355c4.609,0,8.35,3.738,8.35,8.349v165.293c0,4.611-3.738,8.349-8.35,8.349h-13.355c-4.61,0-8.35-3.736-8.35-8.349V171.329z M189.216,171.329c0-4.61,3.738-8.349,8.349-8.349h13.355c4.609,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.737,8.349-8.349,8.349h-13.355c-4.61,0-8.349-3.736-8.349-8.349V171.329L189.216,171.329z M130.775,171.329c0-4.61,3.738-8.349,8.349-8.349h13.356c4.61,0,8.349,3.738,8.349,8.349v165.293c0,4.611-3.738,8.349-8.349,8.349h-13.356c-4.61,0-8.349-3.736-8.349-8.349V171.329z"/><path d="M343.567,21.043h-88.535V4.305c0-2.377-1.927-4.305-4.305-4.305h-92.971c-2.377,0-4.304,1.928-4.304,4.305v16.737H64.916c-7.125,0-12.9,5.776-12.9,12.901V74.47h304.451V33.944C356.467,26.819,350.692,21.043,343.567,21.043z"/></g></g></svg>
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
