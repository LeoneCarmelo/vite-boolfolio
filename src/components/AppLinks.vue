<script>
import AppHeader from './AppHeader.vue'
import { store } from '../store';
export default {
    name: 'AppLinks',
    components:{
        AppHeader
    },
    data() {
        return {
            store
        }
    }
}
</script>
        
<template>
<div class="container" v-if="store.whole_page" @click="store.whole_page = false" :class="store.whole_page ? 'overflow_y_hide' : ''">
    <router-link to="/">Home</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
</div>
<AppHeader v-else/>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variables' as *;
@use '../styles/common' as *;
.container {
    position:relative;
    max-width:100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
    background: $dark-75;


    a {
        text-decoration: none;
        color: $light;
        font-size: 3.5rem;
    }

}


</style>