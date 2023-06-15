<script>
import AppLinks from './components/AppLinks.vue';
import WelcomePage from './components/WelcomePage.vue';
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
    <router-view class="router-view" v-slot="{Component}">
        <Transition name="page-opacity" mode="out-in">
            <component :is="Component"/>
        </Transition>
    </router-view>
</template>

<style lang="scss">
@use './styles/general.scss';
@use './styles/variables' as *;
@use './styles/common' as *;

.page-opacity-enter-active,
.page-opacity-leave-active {
    transition: 600ms ease all;
}
.page-opacity-enter-from,
.page-opacity-leave-to {
opacity:0;
}
</style>
