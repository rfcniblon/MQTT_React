import React from 'react';

 const MessageList=({data}) => {
  //console.log(data);

  return (
    <div className='pb-3'>
      <h3 className='text-center'>Réception des messages</h3>
      <ul className='list-group'>
       {data && data.map((d) => 
        <li className="list-group-item mt-1" key={d}>
          {d}
        </li>
        )} 
      </ul>
    </div>
  )
}
export default MessageList
