<script>
import axios from 'axios';
import CardProject from './components/CardProject.vue'

export default {
    components: {
        CardProject
    },
    data() {
        return {
            projects: null,
            loading: true,
            base_url: 'http://127.0.0.1:8000/',
            end_point_projects: 'api/projects'
        }
    },
    methods: {
        callAPI(url) { //endpoint projects
            axios
                .get(url)
                .then(response => {
                    console.log(response)
                    this.projects = response.data.results.data

                })
                .catch(error => {
                    console.log(error)
                    console.log(error.message)
                })
        }
    },
    mounted() {
        this.callAPI(this.base_url + this.end_point_projects)
    }
}
</script>

<template>
    <div class="container">
        <h1 class="text-center py-4">My Portfolio</h1>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3" v-if="projects">
            <CardProject v-for="project in projects" :key="project.id" :image="project.image"
                :link_project="project.link_project" :link_website="project.link_website" :description="project.description"
                :technologies="project.technologies" />
        </div>
    </div>
</template>

<style lang="scss">
@use './styles/general.scss';
</style>
