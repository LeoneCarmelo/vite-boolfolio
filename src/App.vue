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
</template>

<style lang="scss">
@use './styles/general.scss';
@use './styles/variables' as *;
@use './styles/common' as *;


</style>
