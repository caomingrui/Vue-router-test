<template>
    <div class="cont">
        <div class="tabelCont">
            <div class="paddBac">
                <slot></slot>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "b"
    }
</script>

<style scoped>
.cont {

    background-color: #f2f2f2 !important;

}
    .cont>div{
        width: calc(100% - 30px) !important;

        padding: 15px;
        border-radius: 2px;
        /*background-color: #fff;*/
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    }

</style>