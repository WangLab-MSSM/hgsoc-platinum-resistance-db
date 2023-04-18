<template>
  <div id="app">
    <div class="top-nav">
      <b-navbar >
          <template #brand>
                <b-navbar-item tag="router-link" :to="{ path: '/' }" style="background: #ededed">
                  <b-icon
                      icon="dna"
                      size="is-large">
                  </b-icon>
                  <h6>A database of genes related to platinum resistance</h6>
                </b-navbar-item>
            </template>
            <template #start>
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    Home
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/about' }">
                    About
                </b-navbar-item>
                <b-navbar-item tag="router-link" :to="{ path: '/forum' }">
                    Forum
                </b-navbar-item>
            </template>
        </b-navbar>
    </div>
    <router-view name='main'></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  name: 'App',
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  /*margin-top: 60px;*/
}

.top-nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
