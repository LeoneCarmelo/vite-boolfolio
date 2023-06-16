<script>
import AppHeader from './components/AppHeader.vue';
import { store } from './store';

export default {
    components: {
    AppHeader
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

.fade-leave-active {
    transition: all 1s;
}

.page-opacity-enter-active,
.page-opacity-leave-active {
    transition: 600ms ease all;
}
.page-opacity-enter-from,
.page-opacity-leave-to,
.fade-leave-to {
opacity:0;
}

</style>
