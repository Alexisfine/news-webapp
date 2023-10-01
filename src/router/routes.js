import {lazy} from 'react'
import Home from '../views/Home'
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: 'News WebApp'
        }
    },
    {
        path: '/detail/:id',
        name: 'detail',
        component: lazy(() => import('../views/Detail')),
        meta: {
            title: 'News Detail'
        }
    },
    {
        path: '/personal',
        name: 'personal',
        component: lazy(() => import('../views/Personal')),
        meta: {
            title: 'Personal Center'
        }
    },
    {
        path: '/store',
        name: 'store',
        component: lazy(() => import('../views/Store')),
        meta: {
            title: 'Store'
        }
    },
    {
        path: '/update',
        name: 'update',
        component: lazy(() => import('../views/Update')),
        meta: {
            title: 'Update Profile'
        }
    },
    {
        path: '/login',
        name: 'login',
        component: lazy(() => import('../views/Login')),
        meta: {
            title: 'Login'
        }
    },
    {
        path: '*',
        name: '404',
        component: lazy(() => import('../views/Page404')),
        meta: {
            title: '404'
        }
    },
]
export default routes