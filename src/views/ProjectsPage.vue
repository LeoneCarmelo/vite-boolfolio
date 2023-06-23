<script>
import { store } from '../store'
import axios from 'axios';
import CardProject from '../components/CardProject.vue';
import AppHeader from '../components/AppHeader.vue';
export default {
    name: 'ProjectsPage',
    components: {
    CardProject,
    AppHeader
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
                    //console.log(response)
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
        this.callAPI(store.base_url + store.end_point_projects)
    }
}
</script>
        
<template>
    <div class="cont">
        <AppHeader/>
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-5" v-if="projects">
                    <CardProject v-for="project in projects" :key="project.id" :image="`${store.base_url}storage/${project.image}`"
                        :link_project="project.link_project" :link_website="project.link_website"
                        :description="project.description" :technologies="project.technologies" :slug="project.slug"/>
            </div>
            <p v-else class="text-center">No projects found</p>
            <div v-if="projects" class="d-flex justify-content-center py-3">
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


<style lang="scss" scoped></style>