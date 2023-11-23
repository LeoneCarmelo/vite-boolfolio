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
        title: String,
        id: Number
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
    <transition-group
        class="col-12 mx-auto rounded-1 h-100 my-5 position-relative d-flex flex-column flex-lg-row gap-5 align-items-center"
        tag="div" name="fade" mode="in-out">
        <div key="description" class="description color-blue-logo order-3 order-lg-0 animate__animated animate__fadeInLeft">
            <h5 class="text-center fs-3 color-orange-logo mb-4">Description</h5>
            {{ description }}
        </div>
        <a key="project" class="w-50 text-decoration-none order-2 text-center d-flex flex-column gap-4 animate__animated animate__fadeInDown">
            <span class="color-blue-logo fs-2">{{ title }}</span>
            <div id="card"
                class="card h-100 position-relative w-50 mx-auto flex-row border-0 rounded-1 bg_transparent justify-content-center">
                <div class=" rounded-1 text-center mx-auto position-relative" width="500">
                    <img :src="image" alt="" class="rounded-1 object-fit-contain" width="300" loading="lazy">
                </div>
            </div>
            <a :href="link_project" class="text-decoration-none" target="_blank">
                <i class="fa-brands color-orange-logo fa-github fs-3"></i>
            </a>
        </a>
        <div key="technologies" class="technologies d-flex flex-column order-0 order-lg-3 animate__animated animate__fadeInRight">
            <h5 class="text-center fs-3 color-orange-logo mb-4">Technologies</h5>
            <div class="d-flex w-100 justify-content-center flex-wrap">
                <div v-for="technology in technologies" class="m-2 tech">
                    <img :src="`${store.base_url}storage/${technology.link_img}`" :alt="technology.name"
                        class="w-100 h-100 object-fit-contain" loading="lazy">
                </div>
            </div>
        </div>
        <hr key="hr" class="animate__animated animate__fadeInUp" style="animation-delay: 1.6s;">
    </transition-group>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variables' as *;

.description {
    animation-delay: 1.2s;
}

a.animate__fadeInDown {
    animation-delay: 0.8s;
}

.technologies {
    animation-delay: 0.4s
}

.tech {
    width: 40px;
    height: 40px;
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
    .description {
        animation-delay: 0.4s;
    }

    a.animate__fadeInDown {
        animation-delay: 0.8s;
    }

    .technologies {
        animation-delay: 1.2s
    }

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
        width: 90%;
        margin-left: 5%;
    }
}</style>