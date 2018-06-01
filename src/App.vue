<template>
  <div id="app" class="container">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
}
.container {
  width: 100%;
  height: 100%;
}
</style>
