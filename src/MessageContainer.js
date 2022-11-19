import React from 'react';
//import MessageList from './MessageList';
import MessageForm from './MessageForm';
import MessageSonde from './MessageSonde';

const MessageContainer = (props) => {

  const addMessage=(message)=>{
    const {mqtt} = props;
    mqtt.publish('test', message);
  }

    return (
      <div className='container-fluid'>
 <div className='offset-sm-1  col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8'>
        <MessageForm onSubmit={addMessage} />
        </div>
        <div className='offset-sm-1 col-10 col-sm-11 col-md-10 col-lg-10 col-xl-10 pt-2'>
      <MessageSonde data={props.data}/> 
       {/* <MessageList data={props.data} />  */}
        </div>
      </div>
    )

  }

export default  MessageContainer
