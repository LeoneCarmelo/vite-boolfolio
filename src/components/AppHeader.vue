<script>
export default {
    name: 'AppHeader'
}
</script>
        
<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <router-link to="/" class="nav-link">
                    <span class="text-white bg-black">Ho</span>
                    <span>me</span>
                </router-link>
                <router-link to="/projects" class="nav-link">
                    <span class="text-white bg-black">Proj</span>
                    <span>ects</span>
                </router-link>
                <router-link to="/about" class="nav-link">
                    <span class="text-white bg-black">Abo</span>
                    <span>ut</span>
                </router-link>
                <router-link to="/contact" class="nav-link">
                    <span class="text-white bg-black">Con</span>
                    <span>tact</span>
                </router-link>
            </ul>
        </div>
    </nav>
<!--     <div class="cont_link">
        <router-link to="/" @click="whole_page = false">
            <span class="text-white bg-black">Ho</span>
            <span>me</span>
        </router-link>
        <router-link to="/projects" @click="whole_page = false">
            <span class="text-white bg-black">Proj</span>
            <span>ects</span>
        </router-link>
        <router-link to="/about" @click="whole_page = false">
            <span class="text-white bg-black">Abo</span>
            <span>ut</span>
        </router-link>
        <router-link to="/contact" @click="whole_page = false">
            <span class="text-white bg-black">Con</span>
            <span>tact</span>
        </router-link>
    </div> -->
</template>


<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variables' as *;
@use '../styles/common' as *;

.cont_link {
    position: sticky;
    top: 0;
    padding: 1rem;
    z-index: 1;
    color: $dark;
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;

}
.nav-link {
    text-decoration: none;
    color: $light;
    font-size: 2rem;
    font-weight: semibold;
    letter-spacing: 5px;

    span:last-child {
        color: $dark;
        background-color: $light;
        transition: all 300ms ease-in-out;
    }
}


a:hover span:last-child {
    background-color: $dark;
    color: $light;
}
</style>