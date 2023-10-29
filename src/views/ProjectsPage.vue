<script>
import { store } from '../store'
import axios from 'axios';
import CardProject from '../components/CardProject.vue';
import AppHeader from '../components/AppHeader.vue';
import NaviGate from '../components/NaviGate.vue';

export default {
    name: 'ProjectsPage',
    components: {
        CardProject,
        AppHeader,
        NaviGate
    },
    data() {
        return {
            projects: null,
            loading: true,
            pages: null,
            store
        }
    },
    methods: {
        callAPI(url) { //endpoint projects
            axios
                .get(url)
                .then(response => {
                    console.log(response.data.results.data)
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
            this.scrollToTop()
        },
        prev(pages) {
            this.callAPI(pages.prev_page_url)
            this.scrollToTop()
        },
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        },
    },
    mounted() {
        this.callAPI(store.base_url + store.end_point_projects)
    }
}
</script>
        
<template>
    <div class="cont">
        <!-- <AppHeader /> -->
        <NaviGate />
        <div class="container">
            <div class="row align-items-centerjustify-content-center flex-column g-3 mt-0 mt-lg-4" v-if="projects">
                <CardProject v-for="project in projects" :key="project.id"
                    :image="`${store.base_url}storage/${project.image}`" :link_project="project.link_project"
                    :link_website="project.link_website" :description="project.description"
                    :technologies="project.technologies" :slug="project.slug" :title="project.title" />
            </div>
            <p v-else class="text-center text-white">No projects found</p>
            <hr>
            <div v-if="projects" class="d-flex justify-content-center py-3">
                <nav aria-label="Page navigation">
                    <ul class="pagination">
                        <li class="page-item d-flex">
                            <button class="page-link border-0" aria-label="Previous" @click="prev(pages)"><!--  -->
                         <img src="arrow-1.png" alt="" class="left" width="40" height="40" loading="lazy">
                            </button>
                        </li>
                        <li class="page-item">
                            <button class="page-link border-0" aria-label="Next" @click="next(pages)">
                                <img src="arrow-1.png" alt="" class="" width="40" height="40" loading="lazy">
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variables' as *;
@use '../styles/common' as *;


.pagination {
    gap: 2.5rem;
/*     img [src="arrow-1.png"] {
        width:50px;
        height:50px;
    } */
    .page-link {
        background-color: transparent;
        outline: revert;
        box-shadow: 0px 0px 4px $first-3;

        &:hover {
            box-shadow: 0px 0px 4px $second-3;
        }

    }
    .left {
        rotate: -180deg;
    }
}
</style>