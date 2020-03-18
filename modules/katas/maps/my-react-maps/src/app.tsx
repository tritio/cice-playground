import React, {useState, useEffect} from 'react'
// import styles from './app.module.css'
// import { bind } from './bind'

//const cx = bind(styles)

export function App() {

  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);



  useEffect( () => {

    function success(position: any) {
      //const coordenates = position.coords;
      const { latitude, longitude } = position.coords;

      setLatitude(latitude);
      setLongitude(longitude);

    }

    function error(err: any) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error);

}, []);

  return (
    <>
    <span>Longitud: {longitude}</span>
    <br/>
    <span>Latitud: {latitude}</span>
     </>
  )
}

