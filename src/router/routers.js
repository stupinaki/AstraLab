import {createRouter, createWebHistory} from 'vue-router';
import MainScreen from "@/pages/MainScreen.vue";
import EnterScreen from "@/pages/EnterScreen.vue";
import SignIn from "@/pages/SignIn.vue";
import SignUp from "@/pages/SignUp.vue";

export const routerNames = {
    EnterScreen: "EnterScreen",
    MainScreen: "MainScreen",
    SignIn: "SignIn",
    SignUp: "SignUp",
}

const routes = [
    {
        path: '/',
        name: routerNames.EnterScreen,
        component: EnterScreen,
    },
    {
        path: '/welcome',
        name: routerNames.MainScreen,
        component: MainScreen
    },
    {
        path: '/sign-in',
        name: routerNames.SignIn,
        component: SignIn,
    },
    {
        path: '/sign-up',
        name: routerNames.SignUp,
        component: SignUp,
    },
]

const router = createRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if(to.hash) {
            return;
        }
        return {top: 0};
    },
    history: createWebHistory(),
})

export default router;
