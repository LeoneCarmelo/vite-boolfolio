<script>


export default {
    name: "CardProject",
    props: {
        image: String,
        link_project: String,
        link_website: String,
        description: String,
        technologies: Array,
        slug: String,
        title: String
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
    mounted() {


    }
}
</script>

<template>
    <!-- fs-md-5 su h2 fs-lg-3 -->
    <div class="cont rounded-1 p-2 p-lg-4 mb-5">
        <div class="col rounded-1 h-100 p-3 p-lg-4 bg_first">
            <router-link :to="{ name: 'project', params: { 'slug': slug } }">
                <div id="card"
                    class="card h-100 position-relative border-0 rounded-1 p-2 p-lg-4 bg_third justify-content-center">
                    <div class="overlay_card rounded-1">
                        <h1 class=" ms-2 p-0 p-lg-2">{{ title }}</h1>
                        <h2 class="fw-bolder p-0 p-lg-2 align-self-end me-1">View more</h2>
                    </div>
                    <div class="card-img-top rounded-1 h-75 w-75 text-center mx-auto">
                        <img :src="image" alt="" class="img-fluid rounded-1 h-100" loading="lazy">
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variables' as *;

.cont {
    background-color: linear-gradient($second-8, $first-4);
}

a {

    .overlay_card {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: $dark-20;
        opacity: 0; //ricambiare a 0
        display: flex;
        justify-content: space-between;
        transition: opacity 0.8s ease;

        h1,
        h2 {
            letter-spacing: 5px;
            font-family: 'Noto Sans', sans-serif;
            font-weight: 700;
            color: $light;
            position: relative;
        }

        h1,
        h2 {
            opacity: 0; //ricambiare a 0
        }

        @keyframes slideToRight {
            0% {
                opacity: 0;
                transform: translateX(-100%);
            }

            100% {
                opacity: 1;
                transform: translateX(0);
            }
        }

        @keyframes slideToLeft {
            0% {
                opacity: 0;
                transform: translateX(100%);
            }

            100% {
                opacity: 1;
                transform: translateX(0);
            }
        }

    }

    .card:hover .overlay_card {
        opacity: 1;
    }

    .card:hover h1 {
        animation: slideToRight 1s ease .5s 1 normal forwards;
    }

    .card:hover h2 {
        animation: slideToLeft 1s ease .5s 1 normal forwards;
    }

/*     .card-img-top img {
        clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
    } */
}


h1,
h2 {
    font-size: 0.8rem !important;
}

h2 {
    bottom: -8px;
}

@media screen and (min-width: 768px) {

    h1,
    h2 {
        font-size: 1.25rem !important;
    }

    h1 {
        top: 3px;
    }

    h2 {
        bottom: -5px;
    }
}

@media screen and (min-width: 992px) {

    h1,
    h2 {
        font-size: calc(1.3rem + 0.6vw) !important;
    }
}
</style>