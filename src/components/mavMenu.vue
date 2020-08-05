<template>
    <div class="menu">
        <el-menu :default-active="$route.path" router class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="this.$store.state.navCheck">
            <div class="menu-nav" v-show="!this.$store.state.navCheck">testAdmin</div>
            <el-submenu :index="item.path" v-for="(item, index) in arr" :key="index">
                <template slot="title">
                    <i :class="item.meta.icon"></i>
                    <span slot="title">{{ item.meta.title }}</span>
                </template>
                <el-menu-item-group >
                    <el-menu-item v-for="(j, k) in item.children" :key="k" :index="item.path+'/'+ j.path">{{ j.name }}</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    // import {rou} from "../router";

    export default {
        name: "mavMenuC",
        data() {
            return {
                listNav: JSON.parse(this.$store.state.routerList),
                arr: []
            };
        },
        created() {
            this.listNav.map(res => {
                if(!res.hidden){
                    this.arr.push(res)
                }
            })
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    .menu,
    .el-menu-vertical-demo,
    .el-menu-item-group{
        background-color: #20222A !important;
    }
    .menu {
        box-shadow: 5px 5px 10px #d9d9d9, -5px -5px 10px #ffffff;
    }
    .menu >>> .el-menu {
        border: none;
    }
    .menu >>> .el-menu-item-group ul {
        margin-top: -15px;
    }
    .el-menu-item-group ul {
        margin-top: -15px;
    }
    .menu-nav {
        height: 50px;
        line-height: 50px;
        background-color: #20222A !important;
        text-align: center;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);
        color: #fff;
    }
    .menu >>> .el-submenu__title {
        background-color: #20222a;
        color:  rgba(255,255,255,.7);
        font-size: 14px;
    }
    .menu >>> .el-submenu__title:hover{
        color: #ffffff;
    }
    .menu >>> .el-menu-item:hover {
        color: white;
    }
    .menu >>> .el-submenu__title:hover i {
        color: white;
    }
    .menu >>> .el-menu-item {
        background-color: rgba(0,0,0,.3);
        color:rgba(255,255,255,.7);
    }
    .menu >>> .el-menu--vertical {
        color: #ffffff !important;
    }
</style>