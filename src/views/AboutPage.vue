<script>
import axios from 'axios';
import { store } from '../store';
import NaviGate from '../components/NaviGate.vue';

export default {
    name: "AboutPage",
    data() {
        return {
            store,
            documents: null
        };
    },
    components: {  NaviGate  },
    methods: {
        callAPI(url) { //endpoint projects
            axios
                .get(url)
                .then(response => {
                    console.log(response)
                    this.documents = response.data.results
                })
                .catch(error => {
                    console.log(error)
                    console.log(error.message)
                })
        },
    },
    mounted() {
        this.callAPI(store.base_url + store.end_point_files)
    }
}
</script>
        
<template>
    <div class="cont">
        <NaviGate />
        <div class="container">
            <div class="row mt-5 ">
                <div class="col-12 col-lg-6">
                    <h2 class="color-blue-logo mt-5 fs-1 mb-5 text-center text-lg-start animate__animated animate__zoomInLeft" style="animation-delay: 0.4s">
                        Something about <span class="color-orange-logo">Me</span>
                    </h2>
                    <h2 class="code my-3 color-orange-logo text-center text-lg-start animate__animated animate__slideInLeft">
                        Code
                    </h2>
                    <div class="mb-5 position-relative animate__animated animate__fadeInRight" style="animation-delay: 0.4s">
                            <div class="line"></div>
                            <div class="square"></div>
                        <p class="color-blue-logo fs-4 px-4 px-lg-5">
                            Hello! I'm Carmelo, a passionate junior full
                            stack web
                            developer with a strong desire to create beautiful and functional websites. I believe in the
                            power of the web to transform ideas into interactive realities.</p>
                            <hr class="mt-5 d-sm-none paragraph">
                    </div>
                </div>
                <div
                    class="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end  align-items-end my-5 my-lg-0">
                    <div class="pc w-50 mb-5">
                        <img src="pc.png" alt="" class="img-fluid animate__animated animate__bounceInRight" style="animation-delay: 0.8s">
                        <div class="cv">
                            <div class="docs" v-if="documents">
                                <a :href="`${store.base_url}storage/${documents[0].file}`" class="text-decoration-none animate__animated animate__fadeInDown" style="animation-delay: 1.2s">
                                    <span>{{ documents[0].name }}</span>
                                </a>
                            </div>
                            <div class="docs" v-else>No Documents found!</div>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <hr class="mb-5 d-sm-none paragraph">
                    <h2 class="description color-orange-logo text-center text-lg-start animate__animated animate__slideInLeft">
                        Music
                    </h2>
                    <div class="d-flex">
                        <div id="music-paragraph" class="w-75 mx-auto mx-lg-0 position-relative animate__animated animate__fadeInRight" style="animation-delay: 0.6s">
                            <div class="line"></div>
                            <p class="color-blue-logo fs-4 px-4 px-lg-5">In addition to being a developer I am also a
                                musician. My love
                                affair with music began as a young 11 when I first picked up my guitar. Over the years, I've
                                delved into various musical genres, drawing inspiration from the greats of rock and heavy
                                metal.I'm the guitar player of <a class="text-decoration-none color-orange-logo"
                                    href="https://www.facebook.com/7blacksides" target="_blank"> 7 Black Sides</a>.</p>
                        </div>
                    </div>
                </div>
                <div class="col-12 text-center">
                    <h2 class="fs-1 color-blue-logo text-center mt-5 d-inline-block">Some picture about</h2>
                    <span class="color-orange-logo fs-1"> Myself</span>
                    <hr class="my-4">
                    <div id="carouselExample" class="carousel slide w-75 mx-auto py-5">
                        <div class="carousel-inner rounded">
                            <div class="carousel-item rounded active">
                                <img src="io.jpg" class="d-block w-100 rounded" alt="...">
                            </div>
                            <div class="carousel-item rounded">
                                <img src="io-2.jpg" class="d-block w-100 rounded" alt="...">
                            </div>
                        </div>
                        <button class="carousel-control-prev justify-content-start" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="prev">
                            <img src="arrow-1.png" alt="arrow-left" class="m-3">
                            <!-- <span class="carousel-control-prev-icon" aria-hidden="true"></span> -->
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next justify-content-end" type="button" data-bs-target="#carouselExample"
                            data-bs-slide="next">
                            <img src="arrow-1.png" alt="arrow-right" class="m-3">
                         <!--    <span class="carousel-control-next-icon" aria-hidden="true"></span> -->
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <hr class="mb-5">
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variables' as *;
@use '../styles/common' as *;


.line {
    position: absolute;
    width: 5px;
    height: 0%;
    background-color: $second-3;
    box-shadow: 0 0 7px $second-3;
    animation: grow 3s ease 1s 1 forwards;
}

@keyframes grow {
    0% {
        height: 0%;
    }

    100% {
        height: 100%;
    }
}

.carousel-inner {
    box-shadow:0 0 16px $first-6;
}
p {
    border-left: 3px solid $second-3;
    position: relative;
    text-align: justify;
}

@media screen and (max-width: 575px) {
    p {
        border-left:0;
    }
    .line {
        display: none;
    }
}

.pc {
    transform: skew(-10deg);
    transform-style: preserve-3d;
    position: relative;


    img {
        border-bottom: 6px solid $first-3;
        -webkit-box-shadow: 0px 7px 2px -3px $first-1;
        -moz-box-shadow: 0px 7px 2px -3px $first-3;
        box-shadow: 0px 7px 2px -3px $first-8;
    }

    .cv {
        position: absolute;
        top: 1rem;
        right: 2.5rem;
        animation: shake 2s ease 0s infinite alternate forwards;

        &:hover {
            animation-play-state: paused;
        }

        a {
            color: $first-3;
            transition: color 0.3s ease-in-out;

            &:hover {
                color: $second-8;
            }
        }
    }

    @keyframes shake {

        0%,
        100% {
            transform: rotate(0deg);
            transform-origin: 50% 50%;
        }

        10% {
            transform: rotate(8deg);
        }

        20%,
        40%,
        60% {
            transform: rotate(-10deg);
        }

        30%,
        50%,
        70% {
            transform: rotate(10deg);
        }

        80% {
            transform: rotate(-8deg);
        }

        90% {
            transform: rotate(8deg);
        }
    }
}


@media screen and (max-width: 992px) {

    #music-paragraph {
        width: 100% !important;
    }
}

hr {
    width: 90%;
    margin: 0 auto;
    background: linear-gradient(to right, $first-1, $first-2, $first-3, $first-4, $first-5, $first-6, $first-7, $first-8);
    opacity: 1;
    height: 3px;
    border: 3px solid $first-3;
    box-shadow: 0 0 6px $first-3;
}

img[alt^="arrow"]{
    width:30px;
}
img[alt="arrow-left"]{
    rotate:180deg;
}
</style>