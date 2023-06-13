<script>
import axios from 'axios';
import CardProject from './components/CardProject.vue';
import WelcomePage from './components/WelcomePage.vue';
import { store } from './store';

export default {
    components: {
        CardProject,
        WelcomePage,
    },
    data() {
        return {
            projects: null,
            loading: true,
            base_url: 'http://127.0.0.1:8000/',
            end_point_projects: 'api/projects',
            pages: null,
            store,
        }
    },
    methods: {
        callAPI(url) { //endpoint projects
            axios
                .get(url)
                .then(response => {
                    console.log(response)
                    this.projects = response.data.results.data
                    this.pages = response.data.results
                })
                .catch(error => {
                    console.log(error)
                    console.log(error.message)
                })
        },
        next(pages) {
            this.callAPI(pages.next_page_url)
        },
        prev(pages) {
            this.callAPI(pages.prev_page_url)
        },
    },
    mounted() {
        this.callAPI(this.base_url + this.end_point_projects)
    }
}
</script>

<template>
    <div class="cont_welcome_page" :class="store.active ? 'overflow_y_hide' : 'overflow_scroll'">
        <button class="w-100 h-100" :class="store.active ? '' : 'd-none'" @click="store.active = false"></button>
        <Transition>
            <WelcomePage v-if="store.active" />
        </Transition>
        <div class="container">
            <h1 class="text-center py-4">My Portfolio</h1>
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3" v-if="projects">
                <CardProject v-for="project in projects" :key="project.id" :image="project.image"
                    :link_project="project.link_project" :link_website="project.link_website"
                    :description="project.description" :technologies="project.technologies" />
            </div>
            <div class="d-flex justify-content-center py-3">
                <nav aria-label="Page navigation">
                    <ul class="pagination">
                        <li class="page-item">
                            <button class="page-link" aria-label="Previous" @click="prev(pages)">
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>
                        <li class="page-item">
                            <button class="page-link" aria-label="Next" @click="next(pages)">
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use './styles/general.scss';
@use './styles/variables' as *;
@use './styles/common' as *;

.cont_welcome_page {
    position: relative;
    height: 100vh;

    button {
        position: relative;
        z-index: 2;
        background-color: transparent;
        border: 0;
    }
    
}

.v-leave-from {
    opacity: 1;
}

.v-leave-to {
    opacity: 0;
    content: 'Carmelo Leone';
}

.v-leave-active {
    transition: all 1.5s ease;
}</style>
