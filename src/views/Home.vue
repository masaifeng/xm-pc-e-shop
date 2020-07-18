<template>
  <div class="home">
    <p>home</p>
    <NavHeader></NavHeader>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFooter'
export default {
  name: 'nav-home',
  components: {
    NavFooter,
    NavHeader
  }
}
</script>

<style></style>
