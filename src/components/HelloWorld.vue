<template>
  <div class="hello">
  <div class="cont">
      <mavMenuC></mavMenuC>
      <div class="tabels" :style="this.$store.state.navCheck?'width: calc(100% - 20px);':'width: calc(100% - 200px);'">
          <div class="tabels_nav">
              <i :class="this.$store.state.navCheck?'el-icon-s-unfold':'el-icon-s-fold'" @click="check"></i>
              <div>

                  <el-dropdown>
                      <span class="el-dropdown-link">
                        <i class="el-icon-s-custom"></i> 我的
                      </span>
                      <el-dropdown-menu slot="dropdown">
                          <el-dropdown-item icon="el-icon-setting" @click.native="exit">退出登录</el-dropdown-item>
                      </el-dropdown-menu>
                  </el-dropdown>
              </div>
<!--              <el-button type="primary" >退出登录</el-button>-->
          </div>
          <bb>
              <el-breadcrumb separator="/">
                  <el-breadcrumb-item v-for="item in levelList" :key="item.path" :to="item.path">{{item.name}}</el-breadcrumb-item>
              </el-breadcrumb>
          </bb>
      </div>
  </div>
  </div>
</template>

<script>
  import mavMenuC from "./mavMenu";
  import bb from './b'
  import router from '../router/index'
export default {
  name: 'HelloWorld',
    data() {
        return {
            levelList: null
        }
    },
  components:{
    mavMenuC,
    // aa,
    bb
  },
    created() {
        this.getBreadcrumb()
    },
    watch: {
        $route() {
            this.getBreadcrumb()
        }
    },
  methods: {
    exit() {
        localStorage.removeItem('setRouList')
        localStorage.removeItem('tk')
        this.$store.commit('setRouList', [])
        this.$store.commit('setToken', undefined)
        this.$message({message: '退出成功呢', type: 'success'})
        router.push('/')
    },
      getBreadcrumb() {
        console.log(this.$route.matched)
        let arr = this.$route.matched.filter(item => item.name)
        console.log(arr)
          this.levelList = this.$route.matched
      },
      check() {
        let state = this.$store.state.navCheck
          this.$store.commit('setCheck', !state)
      },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .cont {
        width: 100%;
        display: flex;
    }
    /*.hello .cont>div{*/
    /*    padding: 15px;*/
    /*}*/
    .tabels {
        /*width: 85%;*/
        /*margin:0 40px;*/
        /*width: 100%;*/
        transition: .8s;
    }
    .tabels_nav {
       padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        line-height: 50px;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    }
    .tabels_nav i {
        font-size: 16px;
        cursor: pointer;
    }
    .hello .el-dropdown {
        cursor:  pointer;
    }
</style>
