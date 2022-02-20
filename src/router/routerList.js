import { lazy } from 'react'
let routerList = [
    {
        path: '/all',
        component: lazy(() => import('../page/all')),
        children: [
            {
                path: '/all/classify',
                component: lazy(() => import('../page/classify'))
            },
            {
                path: '/all/home',
                component: lazy(() => import('../page/home'))
            },
            {
                path: '/all/shopcar',
                component: lazy(() => import('../page/shopcar'))
            },
           
        ]
    },
    {
        path: '/my',
        component: lazy(() => import('../page/my'))
    },
    {
        path: '/login',
        component: lazy(() => import('../page/login'))
    },
    {
        path: '/louceng',
        component: lazy(() => import('../page/louceng'))
    },
    {
        path: '/add',
        component: lazy(() => import('../page/add'))
    },
    {
        path:'/edit',
        component:lazy(()=>import('../page/edit'))
    },
    {
        path:'/lous',
        component:lazy(()=>import('../page/lou'))
    },
    {
        path:'/pull',
        component:lazy(()=>import('../page/pull'))
    },
    {
        from: '/',
        to: '/all/home'
    }
]
export default routerList