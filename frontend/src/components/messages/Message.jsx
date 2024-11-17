import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
<img alt='profile pic' src={"https://i.pinimg.com/enabled/236x/bf/33/78/bf33782ccaf84eab892223e8931cb440.jpg"} />
            </div>

        </div>
      <div className={'chat-bubble text-white bg-gray-800'}>Hi! What's up? </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1'>22:04</div>
    </div>
  );
};

export default Message;
