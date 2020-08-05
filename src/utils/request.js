import axios from 'axios'
import Vue from 'vue'
import store from "../store/index";
axios.interceptors.request.use(req => {
    if(store.state.tokens) {
        req.headers.Authorization = store.state.tokens
    }
    return req
})
Vue.prototype.$axios = axios