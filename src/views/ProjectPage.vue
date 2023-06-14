<script>
import { store } from '../store'
import axios from 'axios';
export default {
    name:'ProjectPage',
    data() {
        return {
            store,
            project: null,
            post: null
        }
    },
    methods: {
        callAPI(url) { //endpoint projects
            axios
                .get(url)
                .then(response => {
                    console.log(response)
                    this.post = response.data.result
                    //console.log(this.post)
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
<div class="project" :title="$route.params.slug"></div>
</template>


<style lang="scss" scoped></style>