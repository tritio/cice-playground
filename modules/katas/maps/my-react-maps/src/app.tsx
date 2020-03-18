import React, {useState, useEffect} from 'react'
import styles from './app.module.css'
import { bind } from './bind'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const cx = bind(styles);

type Status = 'error' | 'loading' | 'success';

function useGeoposition() {
  const [coordinates, setCoordinates] = useState({longitude: 0, latitude: 0});
  const [status, setStatus] = useState<Status>('loading');


  useEffect( () => {

    const id = navigator.geolocation.watchPosition(({coords}) => {
      const { latitude, longitude } = coords;
      setCoordinates({latitude, longitude});
      setStatus('success')
    },
      error => {
        setStatus('error')
      }
    );

    //función que se ejecuta cuando se destruye el componente:

    return () => navigator.geolocation.clearWatch(id);

}, []);

   return {coordinates, status}

}

export function App() {

  const { coordinates, status } = useGeoposition();

  if (status ==='loading') {
    return <span>cargando...</span>
  }

  if (status === 'error') {
    return <span>Error al obtener la localización</span>
  }

  return (
    // para que se vea bien, importamos en index.tsx los estilos de Leaftlet
   <Map className={cx('map')} center={[coordinates.latitude, coordinates.longitude]} zoom={13}>
     <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
       Longitud: {coordinates.longitude} ----- Latitud: {coordinates.latitude}

    </Map>


  )
}

