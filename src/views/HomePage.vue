<script>
import { store } from '../store';
//import NaviGate from '../components/NaviGate.vue';

export default {
    name: "HomePage",
    components: {
        //NaviGate,

    },
    data() {
        return {
            store,
            my_name: 'Carmelo Leone'
        };
    },
    methods: {

    },
    mounted() {
/*         let textWrapper = document.getElementById('ml3');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline({ loop: false })
            .add({
                targets: '#ml3 .letter',
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 2250,
                delay: (el, i) => 150 * (i + 1)
            }).add({
                targets: '#ml3',
                opacity: 1,
                duration: 1000,
                easing: "easeOutExpo",
                delay: 1000
            }); */
        /*         //console.log(anime)
                let shape_2 = document.querySelector('.shape-2')
                let iteration = 0;
        
                function changeShape() {
                    iteration++;
                    if (iteration % 2 === 0) {
                        // Even iteration: Change to a different polygon
                        shape_2.style.clipPath = 'polygon(7.39% 22.42%, 71px 8px, 62.64% 9px, 85.25% 14.56%, 65px 30.57%, 54.11% 85.56%, 35.23% 106.07%, 22.61% 52.13%)';
                    } else {
                        // Odd iteration: Change to another polygon
                        shape_2.style.clipPath = 'polygon(20.75% 65.11%, 2px 89px, 54.6% 65px, .25% 14.56%, 65px 65.57%, 51.11% 85.56%, 95.23% 10.07%, 122.61% 92.13%)';
                    }
                }
                setInterval(changeShape, 5000); */
    }

}
</script>

<template>
    <div class="cont">
        <!--    <NaviGate /> -->
        <div class="container-name overflow_y_hide">
            <div class="row justify-content-center w-100">
                <div class="col text-center">
                    <router-link to="/about" class="text-decoration-none">
                        <!--  <h1> --><!-- I'm <br> -->
                        <!-- <span id="ml3">{{ my_name }}</span> -->
                        <!-- br>Full Stack Developer based in the Netherlands. -->
                        <!-- </h1> -->
                        <img key="logo" width="100" src="logo.png" alt="" class="animate__animated animate__zoomIn"
                            loading="lazy">
                    </router-link>
                </div>
            </div>
            <!--             <div class="shape-1"></div>
            <div class="shape-2"></div> -->
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variables' as *;
@use '../styles/common' as *;

.cont {
    height: 100vh;
    width: 100%;
    position: relative;

    /*     .shape-1 {
        position: absolute;
        height: 100%;
        width: 10%;
        background: $first-8;
        clip-path: polygon(38% 0, 30% 75%, 99% 64%, 99% 100%, 0 100%, 0 0);
        left: 0;
        z-index: -1;
    } */

    /*     .shape-2 {
        position: absolute;
        height: 100%;
        width: 10%;
        background: $first-8;
        clip-path: polygon(34% 26%, 0 0, 100% 0, 100% 100%, 0 100%, 34% 72%, 79% 80%, 79% 19%);
        right: 0;
        z-index: -1;
    } */

    /*     .shape-2 {
        position: absolute;
        height: 100%;
        width: 0%;
        background: $first-8;
        clip-path: polygon(7.39% 22.42%, 71px 8px, 62.64% 9px, 85.25% 14.56%, 65px 30.57%, 54.11% 85.56%, 35.23% 106.07%, 22.61% 52.13%);
        right: 277px;
        z-index: -1;
        rotate: -65deg;
        animation-name: move;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }

    @keyframes move {
        0% {
            width: 0%;
            rotate: -65deg;
            right: 277px;
            //clip-path: polygon(7.39% 22.42%, 71px 8px, 62.64% 9px, 85.25% 14.56%, 65px 30.57%, 54.11% 85.56%, 35.23% 106.07%, 22.61% 52.13%);
        }

        100% {
            width: 50%;
            rotate: 165deg;
            right: 655px;
            //clip-path: polygon(20.75% 65.11%, 2px 89px, 54.6% 65px, .25% 14.56%, 65px 65.57%, 51.11% 85.56%, 95.23% 10.07%, 122.61% 92.13%);
        }
    } */
}

.container-name {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;

    a>h1 {
        animation-name: slidein 1.5s;
        color: $first-3;

        span {
            font-family: 'Comforter', cursive;
            color: $first-3;
            animation: change-color 5s ease 3s forwards;
        }

        @keyframes change-color {
            0% {
                color: $first-3;
            }

            50% {
                color: $first-3;
            }

            100% {
                color: $second-10;
            }
        }
    }

    a {
        display: inline-block;
        &:hover {
            box-shadow: 0 0 3px $second-3 !important;
        }
        &:focus {
            box-shadow: 0 0 3px $first-3 !important;
        }
    }

}


#ml3 {
    font-weight: 900;
    font-size: 5rem;
}

@media screen and (min-width:768px) {
    #ml3 {
        font-size: 7rem;
    }
}


@keyframes slidein {
    from {
        opacity: 0;
        transform: translateX(-100%);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>