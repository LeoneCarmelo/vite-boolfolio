<script>
export default {
    name: 'AppHeader'
}
</script>
        
<template>
    <div class="cont_link">
        <router-link to="/" @click="whole_page = false">Home</router-link>
        <router-link to="/projects" @click="whole_page = false">Projects</router-link>
        <router-link to="/about" @click="whole_page = false">About</router-link>
        <router-link to="/contact" @click="whole_page = false">Contact</router-link>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variables' as *;
@use '../styles/common' as *;

.cont_link {
    position:sticky;
    top:0;
    padding:1rem;
    z-index: 1;
    background: $dark;
    display:flex;
    justify-content:center;
    gap:1rem;

    a {
        text-decoration:none;
        color:$light;
        font-size: 2rem;
    }
}
</style>