<script>
import { store } from '../store'
import GoBack from '../components/GoBack.vue';
import axios from 'axios';
export default {
    components: {
        GoBack
    },
    name: 'ProjectPage',
    /*     props: {
            id: {required:true}
        }, */
    data() {
        return {
            store,
            project: null,
        }
    },
    methods: {
        callAPI(url) { //endpoint projects
            axios
                .get(url)
                .then(response => {
                    //console.log(response)
                    if (response.data.success) {
                        this.project = response.data.result
                    } else {
                        this.$router.push({
                            name: 'NotFound'
                        })
                    }
                    //console.log(this.project)
                })
                .catch(error => {
                    console.log(error)
                    console.log(error.message)
                })
        },
    },
    mounted() {
        this.callAPI(store.base_url + store.end_point_projects + this.$route.params.slug)
    }
}
</script>
        
<template>
    <div class="project position-relative" :title="$route.params.slug">
        <div class="container py-5 w-75" v-if="project">
            <div class="row row-cols-1">
                <div class="col mb-4">
                    <div class="shadow">
                        <img :src="`${store.base_url}storage/${project.image}`" :alt="project.title" class="img-fluid">
                    </div>
                </div>
                <div class="col">
                    <div class="data d-flex flex-column flex-lg-row justify-content-between">
                        <ul class="list-unstyled w-75 mx-auto mx-md-0 text-center text-md-start">
                            <li class="w-100">
                                <span class="fs-2 fw-bold">{{ project.title }}</span>
                            </li>
                            <li class="w-100">
                                <span class="fs-5">{{ project.type.name }}</span>
                            </li>
                            <li class="d-flex w-100 justify-content-around justify-content-md-start">
                                <a :href="project.link_project" target="_blank" class="fs-5 text-decoration-none">
                                    <span class="">Repo</span>
                                </a>
                                <a :href="project.link_website" target="_blank" class="ms-2 fs-5 text-decoration-none">Website</a>
                            </li>
                            <li class="w-100 d-none d-md-block">
                                <span class="fs-5">{{ project.description }}</span>
                            </li>
                        </ul>
                        <div class="technologies">
                            <ul class="list-unstyled my-3 d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
                                <li v-for="technology in project.technologies" class="mx-1">
                                    <img :src="`${store.base_url}storage/${technology.link_img}`" :alt="technology.name"
                                        class="w-100 h-100 object-fit-contain" loading="lazy">
                                </li>
                            </ul>
                            <GoBack />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variables' as *;
@use '../styles/common' as *;

/* .project {
    background: radial-gradient(ellipse at top, orangered, transparent),
        radial-gradient(farthest-corner at bottom, $dark, transparent);
} */

.data:last-child li {
    width: 60px;
}

a {
    color: $dark;
}

a:hover {
    color: $light;
}
div.technologies li {
 box-shadow:  0 .5rem 1rem rgba($dark, .15);
 transition: all 0.25s ease-in-out;
}
div.technologies li:hover {
 box-shadow: none !important;
}


</style>