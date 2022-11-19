import React, { useState } from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import MessageSonde from './MessageSonde';

const MessageContainer = (props) => {
  const [isShow, setIsShow] = useState(false);

  const addMessage = (message) => {
    const { mqtt } = props;
    // Ici on publie dans le canal "test"
    mqtt.publish('test', message);
  }

  const Show = () => {
    setIsShow(!isShow)
  }

  return (
    <div className='container-fluid'>
      <div className='d-flex justify-content-center offset-sm-2  col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8'>
      <button className='btn btn-success' type="submit" onClick={Show}>{!isShow ? "Lecture des données":" Lecture donnée esp8266"}</button>
      </div>
      <div className='offset-sm-2  col-10 col-sm-10 col-md-8 col-lg-8 col-xl-8'>
        <MessageForm onSubmit={addMessage} />
      </div>
      <div className='offset-sm-1 col-10 col-sm-11 col-md-10 col-lg-10 col-xl-10 pt-2'>
        {isShow ?
          <MessageSonde data={props.data} /> :
          <MessageList data={props.data} />}
      </div>
    </div>
  )
}
export default MessageContainer
