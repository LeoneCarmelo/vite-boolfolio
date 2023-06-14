import { createRouter, createWebHistory } from "vue-router";
import HomePage from './views/HomePage.vue'
import ProjectsPage from './views/ProjectsPage.vue'
import AboutPage from './views/AboutPage.vue'
import ContactPage from './views/ContactPage.vue'
import ProjectPage from './views/ProjectPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/projects',
            name: 'projects',
            component: ProjectsPage
        },
        {
            path: '/about',
            name: 'about',
            component: AboutPage
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactPage
        },
        {
            path: '/projects/:slug',
            name: 'project',
            component: ProjectPage
        },

    ]
})

export { router }