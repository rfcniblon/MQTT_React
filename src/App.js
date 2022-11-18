import React from 'react';
import './App.css';
import { Connector } from 'mqtt-react';
import _MessageContainer from './MessageContainer.js';
import {subscribe} from 'mqtt-react';

const MessageContainer = subscribe({topic: 'test'})(_MessageContainer);
//const SERVER_MQTT = process.env.SERVER_ADDRESS_MQTT;
//const PORT_MQTT = process.env.SERVER_MQTT_PORT;
//const PORT_WS= process.env.SERVER_WS_PORT;

const SERVER_MQTT = "192.168.1.62";
const PORT_WS= 8885;


function App(){
  
    return (
      <Connector mqttProps={"ws://"+SERVER_MQTT +":"+PORT_WS+"/"} >
         {/* <Connector mqttProps="ws://192.168.1.62:8885/"> */}
      <div className="offset-sm-3 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 mt-2 bgg">
        <div className="offset-sm-3 col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 mt-2">
          <h2 className='text-center pt-3 pb-3'>MQTT React</h2>
        </div>
        <MessageContainer/> 
      </div>
      </Connector>
    );
  }


export default App;
