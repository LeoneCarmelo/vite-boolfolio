<script>
export default {
    name: 'AppHeader'
}
</script>
        
<template>
    <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <router-link to="/" class="nav-link">
                        <span class="text-white bg-black">Ho</span>
                        <span :class="$route.path === '/' ? 'bg-black text-white' : ''">me</span>
                    </router-link>
                    <router-link to="/projects" class="nav-link">
                        <span class="text-white bg-black">Proj</span>
                        <span :class="$route.path === '/projects' ? 'bg-black text-white' : ''">ects</span>
                    </router-link>
                    <router-link to="/about" class="nav-link">
                        <span class="text-white bg-black">Abo</span>
                        <span :class="$route.path === '/about' ? 'bg-black text-white' : ''">ut</span>
                    </router-link>
                    <router-link to="/contact" class="nav-link">
                        <span class="text-white bg-black">Con</span>
                        <span :class="$route.path === '/contact' ? 'bg-black text-white' : ''">tact</span>
                    </router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variables' as *;
@use '../styles/common' as *;

.navbar {
    height: 80px;
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