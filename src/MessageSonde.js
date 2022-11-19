import React from 'react';

const MessageSonde = ({ data }) => {

  const ResultSonde1 = () => {
    const idSonde1 = 1;
    if (data[0] && data[0].idx === idSonde1) {
      const temp = data[0].svalue;
      const temperature = temp.substring(0, 5);
      const humidite = temp.substring(6, 11);
      return (
        <div>
          {/* sonde 1 */}
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
        </div>
      )
    } 
    if (data[1] && data[1].idx === idSonde1) {
      const temp = data[1].svalue;
      const temperature = temp.substring(0, 5);
      const humidite = temp.substring(6, 11);
      return (
        <div>
          {/* sonde 1 */}
          <section className=''>
            <div className='d-flex'>
              <p>Id sonde 1 :</p><span className='ms-1'>{data[1] ? data[1].idx : null}</span>
            </div>
            <div className='d-flex'>
              <p>Température :</p><span className='ms-1'>{data[1] ? temperature : null}C°</span>
            </div>
            <div className='d-flex'>
              <p>Humidité :</p><span className='ms-1'>{data[1] ? humidite : null}%</span>
            </div>
          </section>
        </div>
      )
    } 
    if (data[2] && data[2].idx === idSonde1) {
      const temp = data[2].svalue;
      const temperature = temp.substring(0, 5);
      const humidite = temp.substring(6, 11);
      return (
        <div>
          {/* sonde 1 */}
          <section className=''>
            <div className='d-flex'>
              <p>Id sonde 1 :</p><span className='ms-1'>{data[2] ? data[2].idx : null}</span>
            </div>
            <div className='d-flex'>
              <p>Température :</p><span className='ms-1'>{data[2] ? temperature : null}C°</span>
            </div>
            <div className='d-flex'>
              <p>Humidité :</p><span className='ms-1'>{data[2] ? humidite : null}%</span>
            </div>
          </section>
        </div>
      )
    } else {
      return (
        <div className='text-center'>
          <p>Aucune données reçu de la sonde n° {idSonde1}</p>
        </div>
      )
    }
  }

  const ResultSonde2 = () => {
    const idSonde2 = 2
    if (data[0] && data[0].idx === idSonde2) {
      return (
        <div>
          {/* sonde 2 */}
          <section className=''>
            <div className='d-flex'>
              <p>Id sonde 2 :</p><span className='ms-1'>{data[0] ? data[0].idx : null}</span>
            </div>
            <div className='d-flex'>
              <p>Humidité du sol :</p><span className='ms-1'>{data[0] ? data[0].svalue : null} %</span>
            </div>
          </section>
        </div>
      )
    }
    if (data[1] && data[1].idx === idSonde2) {
      return (
        <div>
          {/* sonde 2 */}
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
    }
    if (data[2] && data[2].idx === idSonde2) {
      return (
        <div>
          {/* sonde 2 */}
          <section className=''>
            <div className='d-flex'>
              <p>Id sonde 2 :</p><span className='ms-1'>{data[2] ? data[2].idx : null}</span>
            </div>
            <div className='d-flex'>
              <p>Humidité du sol :</p><span className='ms-1'>{data[2] ? data[2].svalue : null} %</span>
            </div>
          </section>
        </div>
      )
    }
    else {
      return (
        <div className='text-center'>
          <p>Aucune données reçu de la sonde n° {idSonde2}</p>
        </div>
      )
    }
  }

  const ResultSonde3 = () => {
    const idSonde3 = 3;
    if (data[0] && data[0].idx === idSonde3) {
      return (
        <div>
          {/* relais  */}
          <section className=''>
            <div className='d-flex'>
              <p>Id relais 1 :</p><span className='ms-1'>{data[0] ? data[0].idx : null}</span>
            </div>
            <div className='d-flex'>
              <p>status :</p><span className='ms-1'>{data[0] ? data[0].switchcmd : null}</span>
            </div>
          </section>
        </div>
      )
    } 
    if (data[1] && data[1].idx === idSonde3) {
      return (
        <div>
          {/* relais  */}
          <section className=''>
            <div className='d-flex'>
              <p>Id relais 1 :</p><span className='ms-1'>{data[1] ? data[1].idx : null}</span>
            </div>
            <div className='d-flex'>
              <p>status :</p><span className='ms-1'>{data[1] ? data[1].switchcmd : null}</span>
            </div>
          </section>
        </div>
      )
    } 
    if (data[2] && data[2].idx === idSonde3) {
      return (
        <div>
          {/* relais  */}
          <section className=''>
            <div className='d-flex'>
              <p>Id relais 1 :</p><span className='ms-1'>{data[2] ? data[2].idx : null}</span>
            </div>
            <div className='d-flex'>
              <p>status :</p><span className='ms-1'>{data[2] ? data[2].switchcmd : null}</span>
            </div>
          </section>
        </div>
      )
    } 
    else {
      return (
        <div className='text-center'>
          <p>Aucune données reçu de la sonde n° {idSonde3}</p>
        </div>
      )
    }
  }

  return (
    <div className='pb-3'>
      <h3 className='text-center'>Réception des messages ESP8266</h3>
      {ResultSonde1()}
      {ResultSonde2()}
      {ResultSonde3()}
    </div>
  )
}

export default MessageSonde
