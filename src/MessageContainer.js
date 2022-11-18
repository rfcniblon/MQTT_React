import React from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';

function MessageContainer(props){

  const addMessage=(message)=>{
    const {mqtt} = props;
    mqtt.publish('test', message);
  }

    return (
      <div className='container-fluid'>
 <div className='offset-md-2  col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8'>
        <MessageForm onSubmit={addMessage} />
        </div>
        <div className='offset-md-1 col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 pt-2'>
        <MessageList data={props.data} />
        </div>
      </div>
    )

  }

export default  MessageContainer