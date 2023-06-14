<script>
export default {
    name: 'CardProject',
    props: {
        image:String,
        link_project: String,
        link_website: String,
        description: String,
        technologies: Array,
    },
    data() {
        return {
            
        }
    },
    methods: {
        cut_description(description) {
            if (description.length > 100) {
                return description.substring(0, 100)
            }
            return description
        }
    }
}
</script>

<template>
    <div class="col">
        <router-link to="projects/:slug">
            <div class="card h-100">
                <div class="card-img-top">
                    <img :src="image" alt="" class="img-fluid">
                </div>
                <div class="card-body">
                    <div class="link_project py-2">
                        <strong>Link Project: </strong>
                        <span>{{ link_project }}</span></div>
                    <div class="link_website py-2">
                        <strong>Link Project: </strong>
                        <span>{{ link_website }}</span>    
                    </div>
                    <p class="my-3">{{ cut_description(description) }}</p>
                </div>
                <div class="card-footer d-flex flex-wrap">
                    <span v-for="technology in technologies" :key="technology.id" class="mx-1">{{ technology.name }}</span>
                    
                </div>
            </div>
        </router-link>
    </div>
</template>


<style lang="scss" scoped></style>