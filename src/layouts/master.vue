<template>
  <div class="site-wrap">
    <Navbar />
    <slot />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style>
@import url('../assets/fonts/icomoon/style.css');
@import url('../assets/css/bootstrap.min.css');
@import url('../assets/css/magnific-popup.css');
@import url('../assets/css/owl.theme.default.min.css');
@import url('../assets/css/bootstrap-datepicker.css');
@import url('../assets/fonts/flaticon/font/flaticon.css');
@import url('../assets/css/aos.css');
@import url('../assets/css/style.css');
.post-content-body img {
  width: 100%;
}
</style>
