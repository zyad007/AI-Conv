import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useNavigate, useParams } from "react-router-dom";

export default function CreateBotModal({ isOpen, setIsOpen }
    : {
        isOpen: boolean,
        setIsOpen: Function
    }
) {

    const [name, setName] = useState('')
    const [instruction, setInstruction] = useState('')

    const [botsList, setBotsList] = useState<{ id: string, name: string }[]>([])

    const nav = useNavigate()
    const params = useParams()

    useEffect(() => {
        loadBots()
    }, [])

    const loadBots = () => {
        fetch('http://localhost:3000/bot')
            .then(res => res.json())
            .then(result => {
                setBotsList(result)
            })
    }

    const handleDelete = (id: string) => {
        fetch('http://localhost:3000/bot/' + id, {
            method: 'DELETE'
        })
            .then(x => {
                if (x.ok) {
                    loadBots()
                }
            })
    }

    const handleCreateChat = () => {
        fetch('http://localhost:3000/bot', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                instruction
            })
        })
            .then(res => {
                if (res.ok) {
                    closeModal();
                }
            })
            .catch(e => {
                console.log(e);
            })
    }

    const closeModal = () => {
        setName('')
        setInstruction('')
        setIsOpen(false);
    }



    return (
        <div>
            <ReactModal
                appElement={document.getElementById('root')}
                isOpen={isOpen}
                className={'-translate-x-1/3 shadow-xl shadow-slate-300 bg-slate-200 -translate-y-1/3 left-[37%] top-1/3 h-[80%] w-[80%] absolute border p-5 rounded-md bg-secondary-2 text-black'}
                shouldFocusAfterRender={false}
                onRequestClose={closeModal}
                closeTimeoutMS={200}
            >
                <div className="w-full h-full flex justify-center items-center space-x-3">

                    <div className="w-full h-full space-y-2 overflow-y-scroll pr-1">

                        {
                            botsList.map(x =>
                                <div className="relative h-24 w-full bg-white flex justify-center items-start pl-10 flex-col">

                                    <div className="font-bold text-xl truncate w-full pr-20">
                                        {x.name}
                                    </div>

                                    <div className="font-semibold">
                                        Id: {x.id}
                                    </div>

                                    <div className="absolute right-0 p-5">
                                        <div className="text-red-700 hover:underline select-none hover:cursor-pointer" onClick={() => handleDelete(x.id)}>
                                            Delete
                                        </div>
                                    </div>

                                </div>
                            )
                        }


                    </div>

                    <div className="w-full h-full flex justify-center items-center flex-col space-y-10">

                        <div className='w-full'>
                            <div><label htmlFor="Chat-Name" id='Chat-Name-Lable' className='text-sm ml-1'>Bot Name</label></div>
                            <input id='Chat-Name' className='text-sm w-full h-8 py-1 px-2 border rounded-md bg-secondary-3 ' type='text' value={name}
                                onChange={(e) => {
                                    setName(e.target.value)
                                }}
                            />
                        </div>

                        <div className='w-full h-full'>
                            <div><label htmlFor="Chat-Instructions" id='Chat-Instructions-Lable' className='text-sm ml-1'>Bot Instructions</label></div>
                            <textarea id='Chat-Instructions' className='text-sm w-full h-full py-1 px-2 border rounded-md bg-secondary-3 resize-none' value={instruction}
                                onChange={(e) => {
                                    setInstruction(e.target.value)
                                }}
                            />
                        </div>

                        <div className="w-full">
                            <button
                                onClick={() => { handleCreateChat() }}
                                className="w-full h-9 rounded-md border text-sm bg-slate-800 text-white hover:bg-slate-600">
                                Create
                            </button>
                        </div>
                    </div>

                </div>
            </ReactModal>
        </div>
    )
}
