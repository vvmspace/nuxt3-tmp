<template>
  <header>
    <nav>
      <NuxtLink to="/" class="logo">Home</NuxtLink>
      <ul>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li>
          <NuxtLink to="https://github.com/vvmspace/nuxt3-tmp">GitHub</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  @apply bg-gray-800 text-white;

  .logo {
    @apply text-2xl font-bold;
  }

  nav {
    @apply flex items-center justify-between px-5 py-2;
    ul {
      @apply flex items-center gap-4;

      a {
        @apply text-white;
      }
    }
  }
}
</style>
