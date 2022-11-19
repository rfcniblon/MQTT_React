import React from 'react';

const MessageSonde = ({ data }) => {
  const Result = () => {
    if (data[0] && data[0]) {
      const temp = data[0].svalue;
      const temperature = temp.substring(0, 5);
      const humidite = temp.substring(6, 11);
      return (
        <div>
          <section className=''>
            <div className='d-flex'>
              <p>Id sonde 1 :</p><span className='ms-1'>{data[0] ? data[0].idx : null}</span>
            </div>
            <div className='d-flex'>
              <p>Température :</p><span className='ms-1'>{data[0] ? temperature : null}C°</span>
            </div>
            <div className='d-flex'>
              <p>Humidité :</p><span className='ms-1'>{data[0] ? humidite : null}%</span>
            </div>
          </section>
          <section className=''>
            <div className='d-flex'>
              <p>Id sonde 2 :</p><span className='ms-1'>{data[1] ? data[1].idx : null}</span>
            </div>
            <div className='d-flex'>
              <p>Humidité du sol :</p><span className='ms-1'>{data[1] ? data[1].svalue : null} %</span>
            </div>
          </section>
        </div>
      )
    } else {
      return (
        <div className='text-center'>
          <p>Aucune données reçu de l'esp 8266</p>
        </div>
      )
    }
  }
  
  return (
    <div className='pb-3'>
      <h3 className='text-center'>Réception des messages ESP8266</h3>
      {Result()}
    </div>
  )
}

export default MessageSonde
