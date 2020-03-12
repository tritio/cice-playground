import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/post/1'
})

export { httpClient }
