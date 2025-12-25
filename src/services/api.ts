import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://bulir.enor.tech', // tua API
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})
