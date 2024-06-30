import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useNavigate, useParams } from "react-router-dom";

export default function AddBotModal({ isOpen, setIsOpen, addBot }
    : {
        isOpen: boolean,
        setIsOpen: Function,
        addBot: Function
    }
) {

    const [error, setError] = useState('')

    const [botsList, setBotsList] = useState<{ id: string, name: string }[]>([])

    useEffect(() => {
        loadBots()
    }, [])

    const loadBots = () => {
        fetch('http://localhost:3000/bot/chat/' + params.id)
            .then(res => res.json())
            .then(result => {
                setBotsList(result)
            })
    }

    const nav = useNavigate()
    const params = useParams()

    const handleAddChat = (id: string) => {
        try {
            addBot(id, params.id);
            closeModal()
        }
        catch (e: any) {
            setError(e.message);
        }
    }

    const closeModal = () => {
        setIsOpen(false);
        setBotsList([]);
    }

    return (
        <div>
            <ReactModal
                appElement={document.getElementById('root')}
                isOpen={isOpen}
                className={'-translate-x-1/3 shadow-xl shadow-slate-300 bg-slate-200 -translate-y-1/3 left-[40%] top-1/3 h-[80%] w-[60%] absolute flex flex-col justify-around items-center border p-5 rounded-md bg-secondary-2 text-black'}
                shouldFocusAfterRender={false}
                onRequestClose={closeModal}
                closeTimeoutMS={200}
                onAfterOpen={loadBots}
            >
                <div className="w-full h-full space-y-2 overflow-y-scroll pr-1">

                    {
                        botsList.map(x =>
                            <div className="relative h-24 w-full bg-white flex justify-center items-start pl-10 flex-col hover:bg-opacity-35 hover:cursor-pointer"
                                onClick={() => {
                                    handleAddChat(x.id)
                                }}
                            >

                                <div>
                                    <div className="font-bold text-xl truncate w-full pr-20">
                                        {x.name}
                                    </div>

                                    <div className="font-semibold">
                                        Id: {x.id}
                                    </div>
                                </div>

                            </div>
                        )
                    }


                </div>

            </ReactModal>
        </div>
    )
}
