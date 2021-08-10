<template>
  <div class="view">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>

<style>
html,
body,
.view,
#app {
  height: 100%;
  width: 100%;
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  box-sizing: border-box;
  margin: 0;
  overflow: hidden;
}

button {
  font-family: "Roboto", sans-serif;
  border: 1px solid transparent;
  padding: 8px 16px;
  border-radius: 4px;
  box-shadow: 0 3px 1px -2px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 14%),
    0 1px 5px 0 rgb(0 0 0 / 12%);
  color: white;
  font-size: 16px;
}

.view {
  flex-direction: column;
}

.flex {
  display: flex;
  box-sizing: border-box;
}

button,
.a {
  cursor: pointer;
}

.primary {
  background-color: #6a4c93;
  color: #f2f2f2;
}

.warn {
  background-color: #ff595e;
  color: #f2f2f2;
}

.secondary {
  background-color: #1982c4;
  color: #f2f2f2;
}

.standard-padding {
  padding: 16px;
}

.fh {
  height: 100%;
}

.fw {
  width: 100%;
}

a {
  text-decoration: none;
  color: inherit;
}

.container-fluid {
  padding: 0;
}

.scroll {
  overflow-y: auto;
}

.grow {
  flex-grow: 1;
}
</style>
