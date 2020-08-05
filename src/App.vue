<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld.vue'

  export default {
    name: 'App',
    components: {
      // HelloWorld
    }
  }

</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  html,body,#app,.hello,.hello>.cont {
    width: 100%;
    height: 100%;
  }
  /*.cont {*/
  /*  height: 90%;*/
  /*}*/
  .menu {
    height: 100%;
  }
.nav {
  width: 100%;
  /*margin: 15px 0;*/
  display: flex;
  background-color: #ffffff;
  justify-content: space-between;
}

.right_tabel {
  background-color: #ffffff;
  margin-top: 15px;
}

.nav>div {
  width: 318px;
  margin-right: 10px;
}
  .el-menu-item.is-active {
    color: #dacfcf !important;
    background-color: #e07c7c80 !important;
  }

  .paddBac {
    width: calc(100% - 30px) !important;
    padding: 15px;
    background-color: #ffffff;
  }
  .menuNav {
    box-shadow:  20px 20px 60px #d9d9d9,
    -20px -20px 60px #ffffff;
  }
  .nameNav {
    height: 40px;
    line-height: 30px;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  .el-table td {
    padding: 6px 0 !important;
    color: #757070;
  }
  .el-table th {
    padding: 10px 0 !important;
    background: #fafafa !important;
    font-weight: 500;
  }
  .el-menu--vertical .el-menu--popup .el-menu-item {
    color: white;
  }
</style>
