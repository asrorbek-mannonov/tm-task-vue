<script setup lang="ts">
const store = useAuthStore()
useHead({
  title: 'Vitesse',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
    // {
    //   name: 'theme-color',
    //   content: computed(() => isDark.value ? '#00aba9' : '#ffffff'),
    // },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() => preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg'),
    },
  ],
})

onMounted(() => {
  if (localStorage.getItem('accessToken'))
    store.fetchUserInfo()
})
</script>

<template>
  <RouterView />
</template>
