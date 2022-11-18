import React from 'react';

export default ({data}) => {
  const dataList = data.map((d,idx) => <li key={idx} className="list-group-item mt-1">{d}</li>)
  return (
    <div className='pb-3'>
      <h3 className='text-center'>Réception des messages</h3>
      <ul className='list-group'>
        {dataList}
      </ul>
    </div>
  )
}
