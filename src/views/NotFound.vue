
<script>
import { store } from '../store';
export default {
    name: 'NotFound',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="cont d-flex justify-content-center align-items-center flex-column">
        <div class="container h-100">
            <div class="row justify-content-center align-items-center text-white text-center">
                <div class="col">4</div>
                <div class="col">O</div>
                <div class="col">4</div>
            </div>
        </div>
        <router-link to="/">
            <span>404</span>
            <span>Lost ?</span>
            <span>Go Home</span>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variables' as *;
@use '../styles/common' as *;

.cont {
    background-color: $dark;
    min-height: 100vh;

    .col {
        font-size: 13rem;
    }
    a {
        display: flex;
        flex-direction: column;
        color:$light;
        text-decoration: none;
        position:absolute;
        text-align:center;
    }
    a span {
        opacity:0;
    }

}

.col:first-child {
    animation-name: go_right;
    animation-duration: 3s;
    animation-iteration-count: ease;
    animation-fill-mode: forwards;
}

@keyframes go_right {
    from {
        transform: translateX(0);
        opacity: 1;
        display: inline;
    }

    to {
        transform: translateX(100%);
        opacity: 0;
        display: none;
    }
}

.col:last-child {
    animation-name: go_left;
    animation-duration: 3s;
    animation-delay: 0.5s;
    animation-iteration-count: ease;
    animation-fill-mode: forwards;
}

@keyframes go_left {
    from {
        transform: translateX(0);
        opacity: 1;
        display: inline;
    }

    to {
        transform: translateX(-100%);
        opacity: 0;
        display: none;
    }
}

.col:nth-child(2) {
    animation-name: ruota;
    animation-duration: 3;
    animation-delay: 3.3s;
    animation-iteration-count: ease;
    animation-fill-mode: forwards;
}

@keyframes ruota {
    0% {
        transform: rotate(0);
        font-size: 13rem;
    }

    25% {
        transform: rotate(22.5deg);
        font-size: 15.5rem;
    }

    50% {
        transform: rotate(45deg);
        font-size: 18rem;
    }

    75% {
        transform: rotate(67.5deg);
        font-size: 20.5rem;
    }

    100% {
        transform: rotate(90deg);
        font-size: 23rem;
    }
}

a > span:first-child {
    animation-name: fade-in;
    animation-delay: 3.6s;
    animation-duration:1s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
}

a > span:nth-child(2) {
    animation-name: fade-in;
    animation-delay: 5s;
    animation-duration:1s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
}

a > span:last-child {
    animation-name: fade-in;
    animation-delay: 8s;
    animation-duration:1s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
}


@keyframes fade-in {
    from {
        opacity:0;
    }
    to {
        opacity:1;
    }
}
</style>