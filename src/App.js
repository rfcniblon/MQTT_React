import React from 'react';
import './App.css';
import { Connector } from 'mqtt-react';
import _MessageContainer from './MessageContainer.js';
import { subscribe } from 'mqtt-react';
require('dotenv').config()

const MessageContainer = subscribe({ topic: 'test' })(_MessageContainer);
const SERVER_MQTT = process.env.REACT_APP_SERVER_MQTT_IP;
//const PORT_MQTT =process.env.REACT_APP_SERVER_MQTT_PORT ;
const PORT_WS = process.env.REACT_APP_SERVER_WS_PORT;

function App() {
  return (
    <Connector mqttProps={"ws://" + SERVER_MQTT + ":" + PORT_WS + "/"} >
      <div className="offset-sm-3 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 mt-2 bgg">
        <div className="offset-sm-3 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 mt-2">
          <h2 className='text-center pt-3 pb-3'>MQTT React</h2>
        </div>
        <MessageContainer />
      </div>
    </Connector>
  );
}

export default App;
