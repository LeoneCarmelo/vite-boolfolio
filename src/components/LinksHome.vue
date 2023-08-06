<script>
export default {
    name: 'LinksHome'
}
</script>
        
<template>
    <nav class="navbar navbar-expand bg-transparent p-0">
        <div class="container-fluid w-100 h-100 p-0">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse w-100 h-100" id="navbarNav">
                <ul class="navbar-nav w-100 h-100 position-relative">
                    <li class="w-25 h-25">
                        <router-link to="/" class="nav-link d-flex justify-content-center align-items-center w-100 h-100">
                            <i class="fa-solid ps-2 fa-house-chimney text-white fs-1 fa-beat"></i>
                            <span class="text-white px-2">Home</span>
                        </router-link>
                    </li>
                    <li class="w-25 h-25">
                        <router-link to="/projects" class="nav-link d-flex justify-content-center align-items-center w-100 h-100">
                            <i class="fa-solid ps-2 fa-folder-open text-white fs-1 fa-beat"></i>
                            <span class="text-white px-2">Projects</span>
                        </router-link>
                    </li>
                    <li class="w-25 h-25">
                        <router-link to="/about" class="nav-link d-flex justify-content-center align-items-center w-100 h-100">
                            <i class="fa-solid ps-2 fa-info text-white fs-1 fa-beat"></i>
                            <span class="text-white px-2">About</span>
                        </router-link>
                    </li>
                    <li class="w-25 h-25">
                        <router-link to="/contact" class="nav-link d-flex justify-content-center align-items-center w-100 h-100">
                            <i class="fa-solid ps-2 fa-user-tie text-white fs-1 fa-beat"></i>
                            <span class="text-white px-2">Contact</span>
                        </router-link>
                    </li>
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
    position: absolute;
    z-index: 2;
    height: 100vh;

    li {
        position: absolute;
        background-color: $first;
    }

    li:nth-child(1) {
        top:0;
        left:0;
        border-bottom-right-radius: 100%;
        transition:border-bottom-right-radius 0.5s ease-in-out;

        &:hover {
            border-bottom-right-radius: 0;
        }
    }
    li:nth-child(2) {
        top:0;
        right:0;
        border-bottom-left-radius: 100%;
        transition:border-bottom-left-radius 0.5s ease-in-out;

        &:hover {
            border-bottom-left-radius: 0;
        }
    }
    li:nth-child(3) {
        bottom:0;
        left:0;
        border-top-right-radius: 100%;
        transition:border-top-right-radius 0.5s ease-in-out;

        &:hover {
            border-top-right-radius: 0;
        }
    }
    li:nth-child(4) {
        bottom:0;
        right:0;
        border-top-left-radius: 100%;
        transition:border-top-left-radius 0.5s ease-in-out;

        &:hover {
            border-top-left-radius: 0;
        }
    }
    .nav-link {
        text-decoration: none;
        color: $light;
        font-size: 2rem;
        font-weight: semibold;
        letter-spacing: 5px;
        padding:0 !important;
    }



}

</style>