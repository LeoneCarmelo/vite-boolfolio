<script>
import WelcomePage from './components/WelcomePage.vue';
import AppLinks from './components/AppLinks.vue'
import { store } from './store';

export default {
    components: {
        WelcomePage,
        AppLinks
    },
    data() {
        return {
            store
        }
    },
    methods: {

    }
}
</script>

<template>
    <AppLinks />
    <router-view></router-view>
<!--     <div class="cont_welcome_page" :class="store.active ? 'overflow_y_hide' : 'overflow_scroll'">
        <button class="w-100 h-100" :class="store.active ? '' : 'd-none'" @click="store.active = false"></button>
        <Transition>
            <WelcomePage v-if="store.active" />
        </Transition>
    </div> -->
</template>

<style lang="scss">
@use './styles/general.scss';
@use './styles/variables' as *;
@use './styles/common' as *;

/* .cont_welcome_page {
    position: relative;
    height: 100vh;

    button {
        position: relative;
        z-index: 2;
        background-color: transparent;
        border: 0;
    }
    
}

.v-leave-from {
    opacity: 1;
}

.v-leave-to {
    opacity: 0;
    content: 'Carmelo Leone';
}

.v-leave-active {
    transition: all 1.5s ease;
} */
</style>
