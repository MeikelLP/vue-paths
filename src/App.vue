<template>
  <div class="d-flex flex-column vh-100">
    <div class="pt-2">
      Test App
    </div>

    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/dependencies">Dependencies</router-link></li>
      <li><router-link to="/dependencies-relative">Dependencies Relative</router-link></li>
      <li><router-link to="/js">Javascript</router-link></li>
      <li><router-link to="/js-relative">Javascript relative</router-link></li>
    </ul>

    <main class="container-fluid flex-grow-1 mb-5">
      <router-view />
    </main>

    <footer class="footer py-4 mt-auto">
      <div class="container text-center">
        <p>
          Test App &copy; 2022 - {{ currentYear }}
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>
