import { acceptHMRUpdate, defineStore } from 'pinia'
import type { IUser } from '~/types'
import http from '~/utils/http'

interface IState {
  user: IUser
}

export const useAuthStore = defineStore('auth', {
  state: (): IState => ({
    user: {
      id: null,
      username: '',
      fullname: '',
      password: '',
      status: false,
    },
  }),
  getters: {
    getUser: state => state.user,
  },
  actions: {
    async login(user: any) {
      try {
        const { data } = await http.post<{ access_token: string }>('/auth/login', {
          username: user.username,
          password: user.password,
        })
        window.localStorage.setItem('accessToken', data.access_token)
        return Promise.resolve(data)
      }
      catch (error: any) {
        return Promise.reject(error)
      }
    },
    logout() {
      localStorage.removeItem('accessToken')
      location.reload()
    },
    async fetchUserInfo() {
      try {
        if (this.user.id)
          return
        const { data } = await http.get<IUser>('/auth/user')
        this.user = data
      }
      catch (e) {
        return Promise.reject(e)
      }
    },
  },
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))

