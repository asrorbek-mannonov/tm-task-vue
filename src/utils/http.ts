import axios from 'axios'

const http = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

http.interceptors.request.use((config) => {
  const token = window.localStorage.getItem('accessToken')
  if (token && config.headers)
    config.headers.Authorization = `Bearer ${token}`

  return config
})

export default http
