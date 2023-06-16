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
    <div class="project" :title="$route.params.slug">
        <div class="container py-5" v-if="project">
            <div class="row">
                <div class="col">
                    <img :src="project.image" :alt="project.title">
                </div>
                <div class="col">
                    <h3 class="text-center">{{ project.title }}</h3>
                    <div class="data">
                        <ul class="list-unstyled">Links
                            <li>{{ project.link_project }}</li>
                            <li>{{ project.link_website }}</li>
                        </ul>
                        <strong>Languages:</strong>
                        <ul class="row list-unstyled my-3">
                            <li v-for="technology in project.technologies" class="col">
                                <img :src="`${store.base_url}storage/${technology.link_img}`" :alt="technology.name"
                                    class="img-fluid h-50">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>


<style lang="scss" scoped></style>