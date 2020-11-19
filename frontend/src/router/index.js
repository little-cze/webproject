import {createRouter, createWebHistory} from 'vue-router'
import Tuwen from "../components/page/tuwen";
import Jingcai from "../components/page/jingcai";
import Toupiao from "../components/page/toupiao";
import Wenda from "../components/page/wenda";
import guanzhu from "../components/tuwen/guanzhu";
import fujin from "../components/tuwen/fujin";
import search from "../components/page/search";

const routes = [
    {
        path: "",
        redirect: '/tuwen',
    },
    {
        path: '/tuwen',
        component: Tuwen,
        meta: {
            ShowTab: true
        },
        children: [
            {
                path: '',
                redirect: '/tuwen/guanzhu'
            },
            {
                path: 'guanzhu',
                component: guanzhu,

            },
            {
                path: 'fujin',
                component: fujin,

            },
            {
                path: 'remen',
                component: guanzhu,

            },
            {
                path: 'shehui',
                component: guanzhu,
            },
            {
                path: 'keji',
                component: guanzhu,

            },
            {
                path: 'jiaoyu',
                component: guanzhu,
            },
            {
                path: 'search',
                component: search,
                meta:{
                    ShowTab: false,
                    showHead:true
                }
            }
        ]
    },
    {
        path: '/jingcai',
        component: Jingcai,
        meta: {
            ShowTab: true
        }
    },
    {
        path: '/toupiao',
        component: Toupiao,
        meta: {
            ShowTab: true
        }
    },
    {
        path: '/wenda',
        component: Wenda,
        meta: {
            ShowTab: true
        }
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
// router.beforeEach((to,from,next)=>{
//     next()
// })
export default router
