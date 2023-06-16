<script>
import AppHeader from './AppHeader.vue'
import { store } from '../store';
export default {
    name: 'AppWelcome',
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

    <!-- First Page -->
<!--     <div class="container" v-if="store.whole_page" @click="store.whole_page = false" :class="store.whole_page ? 'overflow_y_hide' : ''">
    <router-link to="/">Home</router-link>
    <router-link to="/projects">Projects</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
</div> -->
<div class="welcome_page" v-if="store.whole_page" @click="store.whole_page = false" :class="store.whole_page ? 'overflow_y_hide' : ''">
        <h1 class="name">
            Carmelo Leone
        </h1>
    </div>
<AppHeader v-else/>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variables' as *;
@use '../styles/common' as *;
/* .container {
    position:fixed;
    max-width:100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
    background: $dark-75;
    height:100vh;



    a {
         text-decoration: none;
        color: $light;
        font-size: 3.5rem; 

    }

} */
.welcome_page {
    position: absolute;
    height: 100vh;
    width: 100%;
    top: 0;
    left: 0;
    background-color: $dark;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;

    .name {
        font-family: 'Comforter', cursive;
        color: $light;
        font-size: 7rem;
    }
}


</style>