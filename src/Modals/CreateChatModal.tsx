import { useState } from "react";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";

export default function CreateChatModal({ isOpen, setIsOpen, addChat }
    : {
        isOpen: boolean,
        setIsOpen: Function,
        addChat: Function
    }
) {

    const [name, setName] = useState('')

    const nav = useNavigate()

    const handleAddChat = () => {
        addChat(name);
        closeModal()
    }

    const closeModal = () => {
        setName('')
        setIsOpen(false);
    }

    return (
        <div>
            <ReactModal
                appElement={document.getElementById('root')}
                isOpen={isOpen}
                className={'-translate-x-1/3 shadow-xl shadow-slate-300 -translate-y-1/3 left-1/2 top-1/2 h-40 w-72 absolute flex flex-col justify-around items-center border p-5 rounded-md bg-secondary-2 text-black'}
                shouldFocusAfterRender={false}
                onRequestClose={closeModal}
                closeTimeoutMS={200}
            >
                <div className='w-full'>
                    <div><label htmlFor="Chat-Name" id='Chat-Name-Lable' className='text-sm ml-1'>Chat Name</label></div>
                    <input id='Chat-Name' className='text-sm w-full my-1 h-8 py-1 px-2 border border-primary-1 rounded-md bg-secondary-3 ' type='text' value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                </div>
                <button
                    onClick={() => { handleAddChat() }}
                    className="w-full  h-9 rounded-md border text-sm bg-slate-800 text-white hover:bg-slate-600">
                    Create
                </button>
            </ReactModal>
        </div>
    )
}
