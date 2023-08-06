<script>
import { store } from '../store'
import axios from 'axios';
export default {
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
                    console.log(response)
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
                    <div class="">
                        <img :src="`${store.base_url}storage/${project.image}`" :alt="project.title" class="img-fluid">
                    </div>
                </div>
                <div class="col">
                    <div class="data d-flex flex-column flex-lg-row justify-content-between">
                        <ul class="list-unstyled">
                            <li class="w-100">
                                <span class="fs-5"><strong>Project's title: </strong>{{ project.title }}</span>
                            </li>
                            <li class="w-100">
                                <span class="fs-5"><strong>Type: </strong>{{ project.type.name }}</span>
                            </li>
                            <li class="d-flex w-100"><strong class="fs-5">Link to repository: </strong>
                                <a :href="project.link_project" target="_blank" class="ms-2 fs-5 text-decoration-none">
                                    <img src="/node_modules/bootstrap-icons/icons/eye.svg" alt="Link repository"
                                        class="ms-2 d-inline d-lg-none">
                                    <span class="d-none d-lg-block">{{ project.link_project }}</span>
                                </a>
                            </li>
                            <li class="d-flex w-100"><strong class="fs-5">Link to website: </strong>
                                <a :href="project.link_website" target="_blank" class="ms-2 fs-5 text-decoration-none">{{
                                    project.link_website
                                }}</a>
                            </li>
                            <li class="w-100">
                                <span class="fs-5"><strong class="fs-5">Description: </strong>{{ project.description
                                }}</span>
                            </li>
                        </ul>
                        <ul class="list-unstyled my-3 d-flex">
                            <li v-for="technology in project.technologies">
                                <img :src="`${store.base_url}storage/${technology.link_img}`" :alt="technology.name"
                                    class="img-fluid">
                            </li>
                        </ul>
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


</style>