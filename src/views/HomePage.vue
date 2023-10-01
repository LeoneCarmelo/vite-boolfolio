<script>
import { store } from '../store';
import AppHeader from '../components/AppHeader.vue';
import NaviGate from '../components/NaviGate.vue';
export default {
    name: "HomePage",
    components: {
        AppHeader,
        NaviGate

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
        <!-- <AppHeader /> -->
        <NaviGate />
        <div class="container-name overflow_y_hide">
            <div class="row justify-content-center w-100">
                <div class="col text-center">
                    <h1>I'm <br>
                        <span id="ml3">{{ my_name }}</span>
                        <br>Full Stack Developer based on the Netherlands.
                    </h1>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variables' as *;
@use '../styles/common' as *;

.cont {
    /*     background-image: url('lion4.png'), linear-gradient(to right, rgb(201, 174, 0), rgb(162, 0, 22));
    background-repeat: no-repeat, no-repeat;
    background-position: right, center;
    background-size: contain; */
    height: 100vh;
    width: 100%;
    position: relative;

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
    }
}

span {
    font-family: 'Comforter', cursive;
    font-size: 7rem;
}

#ml3 {
  font-weight: 900;
  font-size: 3.5em;
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