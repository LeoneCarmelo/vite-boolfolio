<script>


export default {
    name: "CardProject",
    props: {
        image: String,
        link_project: String,
        link_website: String,
        description: String,
        technologies: Array,
        slug: String
    },
    data() {
        return {};
    },
    methods: {
        cut_description(description) {
            if (description.length > 100) {
                return description.substring(0, 100);
            }
            return description;
        }
    },

}
</script>

<template>
    <div class="cont rounded-1">
        <div class="col rounded-1 h-100">
            <router-link :to="{ name: 'project', params: { 'slug': slug } }">
                <div class="card h-100 position-relative rounded-1">
                    <div class="overlay_card rounded-1">
                        <h2 class="fw-bold">View more</h2>
                    </div>
                    <div class="card-img-top rounded-1 h-100">
                        <img :src="image" alt="" class="img-fluid rounded-1 h-100">
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variables' as *;
.overlay_card {
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;
    background-color: $dark-75;
    opacity:0;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    color: $light;
    transition: opacity ease-in-out 0.5ms;

    h2 {
        letter-spacing: 5px;
    }
    
}

.card:hover .overlay_card {
    opacity:1;
}

</style>