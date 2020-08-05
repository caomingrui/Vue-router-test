import Vue from 'vue'
import router from '../router/index'
    Vue.directive('c-check', {
        inserted: function (el,binding,vNode) {
            let state = router.app._route.meta.permissions
            let arr = []
            console.log(router.currentRoute)
            state.map(res => arr.push("'"+res+"'"))
            console.log(arr.includes(binding.expression))
            if(!arr.includes(binding.expression)) {
                    vNode.elm.className = vNode.elm.className.concat(' is-disabled')
                }
        },
    })


