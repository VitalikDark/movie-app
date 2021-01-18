<template>
  <div id="app" style="">
    <Main/>
    <Search/>
  </div>
</template>

<script>

import Main from './components/Main'
import Search from './components/Search'

export default {
  name: 'App',
  components: {
    Main,
    Search
  }
}
</script>

<style>
* {
  font-family: Arial;
}

#app {
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
}
</style>
