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

    const nav = useNavigate()
    const params = useParams()

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
            if(res.ok) {
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
                className={'-translate-x-1/3 shadow-xl shadow-slate-300 -translate-y-1/3 left-1/2 top-1/2 h-64 w-96 absolute flex flex-col justify-around items-center border p-5 rounded-md bg-secondary-2 text-black'}
                shouldFocusAfterRender={false}
                onRequestClose={closeModal}
                closeTimeoutMS={200}
            >
                <div className='w-full'>
                    <div><label htmlFor="Chat-Name" id='Chat-Name-Lable' className='text-sm ml-1'>Bot Name</label></div>
                    <input id='Chat-Name' className='text-sm w-full my-1 h-8 py-1 px-2 border border-primary-1 rounded-md bg-secondary-3 ' type='text' value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                </div>

                <div className='w-full'>
                    <div><label htmlFor="Chat-Name" id='Chat-Name-Lable' className='text-sm ml-1'>Bot Instructions</label></div>
                    <input id='Chat-Name' className='text-sm w-full my-1 h-8 py-1 px-2 border border-primary-1 rounded-md bg-secondary-3 ' type='text' value={instruction}
                        onChange={(e) => {
                            setInstruction(e.target.value)
                        }}
                    />
                </div>

                <button
                    onClick={() => { handleCreateChat() }}
                    className="w-full  h-9 rounded-md border text-sm bg-slate-800 text-white hover:bg-slate-600">
                    Create
                </button>
            </ReactModal>
        </div>
    )
}
