import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Chat = () => {
    const nav = useNavigate();
    const params = useParams();

    return (
        <div>
            {params.id}
        </div>
    );
}

export default Chat;
