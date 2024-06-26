import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Message from './Message';
import Response from './Response';

const Chat = () => {
    const nav = useNavigate();
    const params = useParams();

    return (
        <div className='w-full h-full flex flex-col justify-end items-start overflow-y-scroll p-6'>
            <Message />
            <Response />
        </div>
    );
}

export default Chat;
