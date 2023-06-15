<script>
import AppHeader from './AppHeader.vue'
export default {
    name: 'AppLinks',
    components:{
        AppHeader
    },
    data() {
        return {
            whole_page: true
        }
    }
}
</script>
        
<template>
<div class="container" v-if="whole_page" @click="whole_page = false">
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
    overflow-y: hidden;

    a {
        text-decoration: none;
        color: $light;
        font-size: 3.5rem;
    }

}


</style>