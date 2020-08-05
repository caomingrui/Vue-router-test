import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store/index";

Vue.use(VueRouter)

export const rou = [
  {path: '/', component: () => import('../components/login'), hidden: true},
  {path: '/home',redirect: '/navigationOne/one', component: () => import('../components/HelloWorld'), hidden: true},
  // {
  //   path: '/navigationOne',
  //   name: '导航一',
  //   component: () => import('../components/HelloWorld'),
  //   children: [
  //     {
  //       path: 'one',
  //       component: () => import('../components/one'),
  //       name:'one'
  //     },
  //     {
  //       path: 'two',
  //       component: () => import('../components/two'),
  //       name:'two'
  //     },
  //   ]
  // },
  //   {
  //     path: '/navigationTwo',
  //     name: '导航二',
  //     component: () => import('../components/HelloWorld'),
  //     children: [
  //       {
  //         path: 't-one',
  //         component: () => import('../components/t-one'),
  //         name:'t-one'
  //       },
  //       {
  //         path: 't-two',
  //         component: () => import('../components/t-two'),
  //         name:'t-two'
  //       },
  //     ]
  //   },
  {path: '/404',
    component: {render(h){return h('div', '非法访问')}},
    hidden: true,
    beforeEnter: (to, from, next) => {
    next()
      localStorage.removeItem('setRouList')
      localStorage.removeItem('tk')
      store.commit('setRouList', [])
      store.commit('setToken', undefined)
    setTimeout(function(){next('/')},1000)
    }
  },
  {path: '*', redirect: '/404', hidden: true}
]

const router = new VueRouter({
  routes: rou,
})

let map = new Map();

map.set('导航一', () => import('../components/HelloWorld'));
map.set('one', () => import('../components/one'));
map.set('two', () => import('../components/two'));
map.set('导航二', () => import('../components/HelloWorld'));
map.set('t-one', () => import('../components/t-one'));
map.set('t-two', () => import('../components/t-two'));


export async function getRoutes() {
  const tk = store.state.tokens
  console.log(localStorage.getItem("tk"))
  if(tk) {
    const menus = JSON.parse(localStorage.getItem("setRouList"))
    let actionRouter = [];
    menus.map(item => {
      if (item.children != null && item.children.length > 0) {
        let children=[];
        item.children.map(tips => {
          children.push({
            path:tips.path,
            name:tips.name,
            component:map.get(tips.name),
            meta:{
              title:tips.meta.title,
              icon:tips.meta.icon,
              permissions:tips.meta.permissions
            },
          });
        });

        actionRouter.push({
          path:item.path,
          name:item.name,
          component:map.get(item.name),
          meta:{
            title:item.title,
            icon:item.icon,
          },
          children,
        });
      }else {
        actionRouter.push({
          path:item.path,
          name:item.name,
          component:map.get(item.name),
          meta:{
            title:item.title,
            icon:item.icon,
          },
          children:[]
        });
      }
    });
    // console.
    router.addRoutes(actionRouter)
  }
}

router.beforeEach((to, from, next) => {
  const tokens = store.state.tokens
  if(tokens) {
    next()
  }else {
    if(to.path == '/') {
      next()
    }else {
      next('/')
    }
  }
})
getRoutes()
export default router
