<script>

import { store } from '../store';
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
        return {
            store
        };
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
    <div
        class="col-12 mx-auto rounded-1 h-100 my-5 position-relative d-flex flex-column flex-lg-row gap-5 align-items-center">
        <div class="description color-blue-logo order-3 order-lg-0">
            <h5 class="text-center fs-3 color-orange-logo mb-4">Description</h5>
            {{ description }}
        </div>
        <router-link :to="{ name: 'project', params: { 'slug': slug } }"
            class="w-50 text-decoration-none order-2 text-center d-flex flex-column gap-4">
            <span class="color-blue-logo fs-2">{{ title }}</span>
            <div id="card"
                class="card h-100 position-relative w-50 mx-auto flex-row border-0 rounded-1 bg_transparent justify-content-center">
                <div class=" rounded-1 text-center mx-auto position-relative" width="500">
                    <div class="overlay_card rounded-1 w-100">
                        <!-- <h1 class="ms-2 color-orange-logo">{{ title }}</h1> -->
                        <h2 class="fw-bolder  me-1 color-orange-logo">View more</h2>
                    </div>
                    <img :src="image" alt="" class="rounded-1 object-fit-contain" width="300" loading="lazy">
                </div>
            </div>
        </router-link>
        <div class="technologies d-flex flex-column order-0 order-lg-3">
            <h5 class="text-center fs-3 color-orange-logo mb-4">Technologies</h5>
            <div class="d-flex w-100 justify-content-center flex-wrap">
                <div v-for="technology in technologies" class="m-2 tech">
                    <img :src="`${store.base_url}storage/${technology.link_img}`" :alt="technology.name" class="w-100 h-100 object-fit-contain"
                        loading="lazy">
                </div>
            </div>
        </div>
        <hr>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variables' as *;

/* .cont {
    background-color: linear-gradient($second-8, $first-4);
} */
.tech {
    width:40px;
    height:40px;
}

hr {
    width: 100%;
    margin-top: 0px;
    margin-bottom: 0px;
    background: linear-gradient(to right, #309fbf, #308fbf, #208fbf, #2070bf, #2080bf, #3080bf, #20809f, #20709f);
    opacity: 1;
    height: 3px;
    border: 3px solid #208fbf;
    box-shadow: 0 0 6px #208fbf;
    position: absolute;
    bottom: -3rem;
}

a {
    span {
        margin-top: -15px;
    }

    .overlay_card {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        background-color: $dark-60;
        opacity: 0; //ricambiare a 0
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.8s ease;
        margin: 0 auto;

        h1,
        h2 {
            letter-spacing: 3px;
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
        animation: slideToRight 1s ease .3s 1 normal forwards;
    }

    .card:hover h2 {
        animation: slideToLeft 1s ease .3s 1 normal forwards;
    }

    /*     .card-img-top img {
        clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);
    } */

}


h1,
h2 {
    font-size: 1.5rem !important;
}

h2 {
    bottom: -8px;
}

@media screen and (min-width: 530px) {

    img[width="300"] {
        width: 500px;
    }
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
.description {
    text-align: center;
}
@media screen and (min-width: 992px) {

    .description,
    .technologies {
        height: 300px;
        width: 25%;
        text-align: left;
    }

    h1,
    h2 {
        font-size: calc(1.3rem + 0.6vw) !important;
    }
    hr {
        width:90%;
        margin-left:5%;
    }
}</style>