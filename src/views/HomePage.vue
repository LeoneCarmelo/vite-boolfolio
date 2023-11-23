<script>
import { store } from '../store';
import NaviGate from '../components/NaviGate.vue';

export default {
    name: "HomePage",
    components: {
        NaviGate,
 
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
        let textWrapper = document.getElementById('ml3');
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
            });
        //console.log(anime)
    }

}
</script>

<template>
    <div class="cont">
         <NaviGate />
        <div class="container-name overflow_y_hide">
            <div class="row justify-content-center w-100">
                <div class="col text-center">
                    <h1>I'm <br>
                        <span id="ml3">{{ my_name }}</span>
                        <br>Full Stack Developer based in the Netherlands.
                    </h1>
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
    .shape-1{
        position:absolute;
        height:100%;
        width:10%;
        background: $first-8;
        clip-path: polygon(38% 0, 30% 75%, 99% 64%, 99% 100%, 0 100%, 0 0);
        left:0;
        z-index:-1;
    }
    .shape-2{
        position:absolute;
        height:100%;
        width:10%;
        background: $first-8;
        clip-path: polygon(34% 26%, 0 0, 100% 0, 100% 100%, 0 100%, 34% 72%, 79% 80%, 79% 19%);
        right:0;
        z-index:-1;
    }
}

.container-name {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;

    h1 {
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
}


#ml3 {
    font-weight: 900;
    font-size: 5rem;
}

@media screen and (min-width:768px) {
    #ml3{
        font-size:7rem;
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