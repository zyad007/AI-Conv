import React, { useState } from 'react';
import CreateBotModal from '../Modals/CreateBotModal';

const Profile = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <CreateBotModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <div className='h-[10%] w-full bg-slate-100 rounded-lg flex justify-around items-center px-2'>

                <div className='bg-cyan-300 w-10 h-10 rounded-full'>

                </div>

                <div className='w-32 text-xl font-semibold pl-2'>
                    User
                </div>

                <div onClick={ () => setIsOpen(true) } 
                
                className='w-10 h-10 text-xl font-semibold rounded-lg hover:bg-gray-300 p-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 48">
                        <circle cx="24" cy="24" r="6.5" fill="none" stroke="#000" strokeWidth="3"></circle><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M30.8,35.7c1.2-0.7,2.8-0.8,4.1-0.2l2.7,1.2c1.9-2,3.4-4.5,4.2-7.3l-2.4-1.7c-1.2-0.8-1.8-2.2-1.8-3.6	s0.7-2.8,1.8-3.6l2.4-1.7c-0.8-2.8-2.3-5.2-4.2-7.3l-2.7,1.2c-1.3,0.6-2.8,0.5-4.1-0.2s-2.1-2-2.2-3.4L28.2,6	c-1.4-0.3-2.8-0.5-4.2-0.5S21.1,5.7,19.8,6"></path><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17.3,12.3c-1.2,0.7-2.8,0.8-4.1,0.2l-2.7-1.2c-1.9,2-3.4,4.5-4.2,7.3l2.4,1.7c1.2,0.8,1.8,2.2,1.8,3.6	s-0.7,2.8-1.8,3.6l-2.4,1.7c0.8,2.8,2.3,5.2,4.2,7.3l2.7-1.2c1.3-0.6,2.8-0.5,4.1,0.2s2.1,2,2.2,3.4l0.3,2.9	c1.4,0.3,2.8,0.5,4.2,0.5s2.9-0.2,4.2-0.5"></path>
                    </svg>
                </div>

            </div>
        </>
    );
}

export default Profile;
