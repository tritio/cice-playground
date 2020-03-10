import React , {useEffect, useState} from 'react'
import styles from './app.module.css'
import { bind } from './bind'

const cx = bind(styles)

interface ResponseDto {
  answer: string
  forced: boolean
  image: string
}

export function App() {

  function callChange() {

    setChange(change + 1)
  }

const [api, setApi] = useState('');
const [change, setChange] = useState(1);

  useEffect(() => {
    fetch(
      'https://yesno.wtf/api',
       {method: 'GET'}
    ).then(res => res.json()
    ).then( response => setApi(response.image))
  }, [change]);



  return (
    <div className="App">
      <img className={cx('image')} src={api} onClick={callChange} />
    </div>
  )
}
