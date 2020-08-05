// import router from '../router/index'
class checks{
    loginCheck(acc,pass) {
        const obj = {}
        if(acc=='admin' && pass=='123456'){
            obj.state = true
            obj.list = this.allList()
            obj.token = 1
        }else if(acc=='cmr' && pass=='123456'){
            obj.state = true
            obj.list = this.partThe()
            obj.token = 2
        }else {
            obj.state = false
        }
        return obj
    }
    allList() {
        return [
            {
                path: '/navigationOne',
                name: '导航一',
                meta: { title: '导航一', icon: 'el-icon-mouse'},
                children: [
                    {
                        path: 'one',
                        name:'one',
                        meta: { title: 'one', permissions: ['view', 'add', 'del', 'editor']},
                    },
                    {
                        path: 'two',
                        name:'two',
                        meta: { title: 'two', permissions: ['view', 'add', 'del', 'editor']},
                    },
                ]
            },
            {
                path: '/navigationTwo',
                name: '导航二',
                meta: { title: '导航二', icon: 'el-icon-set-up'},
                children: [
                    {
                        path: 't-one',
                        name:'t-one',
                        meta: { title: 't-one', permissions: ['view']},
                    },
                    {
                        path: 't-two',
                        name:'t-two',
                        meta: { title: 't-two', permissions: ['view', 'add']},
                    },
                ]
            }
        ]
    }
    partThe() {
        return [
                {
                    path: '/navigationOne',
                    name: '导航一',
                    meta: { title: '导航一', icon: 'el-icon-mouse'},
                    children: [
                        {
                            path: 'one',
                            name:'one',
                            meta: { title: 'one', permissions: ['view']},
                        }
                    ]
                },
                {
                    path: '/navigationTwo',
                    name: '导航二',
                    meta: { title: '导航二', icon: 'el-icon-set-up'},
                    children: [
                        {
                            path: 't-one',
                            name:'t-one',
                            meta: { title: 't-one', permissions: ['del']},
                        }
                    ]
                }]
            }
}

export default new checks()