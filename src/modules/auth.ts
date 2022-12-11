import { createPinia } from 'pinia'
import type { UserModule } from '~/types'

export const install: UserModule = ({ router, app, isClient, initialState }) => {
  // Setup Pinia first
  // then use Pinia modue useAuthStore
  const pinia = createPinia()
  app.use(pinia)

  if (isClient)
    pinia.state.value = (initialState.pinia) || {}

  else
    initialState.pinia = pinia.state.value
  const store = useAuthStore()

  router.beforeEach(async (to, from, next) => {
    if (to.meta.public) {
      if (localStorage.getItem('accessToken'))
        next('/store')

      else next()
    }
    else {
      if (localStorage.getItem('accessToken')) {
        await store.fetchUserInfo()
        next()
      }

      else { next('/auth/login') }
    }
  })
}
