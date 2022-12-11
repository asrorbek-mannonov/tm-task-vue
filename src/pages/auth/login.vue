<script setup lang="ts">
import { useAuthStore } from '~/store/auth'

const userInfo = ref({
  username: '',
  password: '',
})

const message = ref<string>('')
const loading = ref<boolean>(false)

const router = useRouter()
const store = useAuthStore()
const handleLogin = async () => {
  if (loading.value)
    return
  loading.value = true
  try {
    await store.login(userInfo.value)
    router.push('/store')
  }
  catch (error: any) {
    message.value = error?.response?.data?.message || 'Login yoki parol noto\'g\'ri kiritildi'
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div min-h-full flex>
    <div w-full flex items-center justify-center class="login-page">
      <div flex-1 flex flex-col justify-center border border-gray-300 py-12 px-4 sm:px-6 lg:flex-none lg:px-12 xl:px-12>
        <div mx-auto w-full max-w-sm lg:w-96>
          <div>
            <h2 mt-6 text-3xl font-extrabold text-green text-center>
              Login
            </h2>
          </div>

          <div mt-12>
            <div mt-6>
              <form space-y-6 @submit.prevent="handleLogin">
                <div>
                  <label for="username" block text-sm font-medium text-gray-700> Login </label>
                  <div mt-1>
                    <input
                      id="username" v-model="userInfo.username" name="username" placeholder="Login" type="text"
                      autocomplete="username" appearance-none block w-full px-4 py-4 border border-gray-300 rounded-md
                      shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500
                      sm:text-sm @focus="message = ''"
                    >
                  </div>
                </div>

                <div space-y-1>
                  <label for="password" block text-sm font-medium text-gray-700>
                    Password
                  </label>
                  <div mt-1>
                    <input
                      id="password" v-model="userInfo.password" placeholder="Password" name="password" type="password"
                      autocomplete="current-password" appearance-none block w-full px-4 py-4 border border-gray-300
                      rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500
                      focus:border-green-500 sm:text-sm @focus="message = ''" @keyup.enter="handleLogin"
                    >
                  </div>
                </div>
                <div v-if="message" space-y-1 text-red>
                  {{ message }}
                </div>
                <div flex items-center>
                  <input
                    id="remember-me" name="remember-me" type="checkbox" h-4 w-4 text-indigo-600
                    focus:ring-indigo-500 border-gray-300 rounded
                  >
                  <label for="remember-me" ml-2 block text-sm text-gray-600>
                    Remember me
                  </label>
                </div>
                <div>
                  <button
                    type="submit" w-full flex justify-center py-4 px-4 border border-transparent rounded-md
                    shadow-sm font-medium text-white bg-green hover:bg-green-400 focus:outline-none focus:ring-2
                    focus:ring-offset-2 focus:ring-green
                  >
                    Sign in
                  </button>
                </div>
                <div text-sm flex justify-center>
                  <a href="#" font-medium underline underline-offset-2 text-gray-400 hover:text-indigo-500>
                    Forgot the password? Click here
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
