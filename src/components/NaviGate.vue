<script>
export default {
    name: 'NaviGate',
}
</script>
        
<template>
    <nav class="navbar navbar-expand-lg bg-white p-0">
        <div class="container-fluid p-0">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav w-100 justify-content-around">
                    <li class="nav-item d-flex justify-content-center align-items-center">
                        <router-link to="/" class="nav-link" :class="$route.path === '/' ? 'active' : ''">
                            <div class="up" :class="$route.path === '/' ? 'd-block' : 'd-none'"></div>
                            <div class="left" :class="$route.path === '/' ? 'd-block' : 'd-none'"></div>
                            <span :class="$route.path === '/' ? 'color-blue-logo' : 'color-orange-logo'">Home</span>
                            <div class="right" :class="$route.path === '/' ? 'd-block' : 'd-none'"></div>
                            <div class="down" :class="$route.path === '/' ? 'd-block' : 'd-none'"></div>
                        </router-link>
                    </li>
                    <li class="nav-item d-flex justify-content-center align-items-center">
                        <router-link to="/projects" class="nav-link" :class="$route.path === '/projects' ? 'active' : ''">
                            <div class="up" :class="$route.path === '/projects' ? 'd-block' : 'd-none'"></div>
                            <div class="left" :class="$route.path === '/projects' ? 'd-block' : 'd-none'"></div>
                            <span
                                :class="$route.path === '/projects' ? 'color-blue-logo' : 'color-orange-logo'">Projects</span>
                            <div class="right" :class="$route.path === '/projects' ? 'd-block' : 'd-none'"></div>
                            <div class="down" :class="$route.path === '/projects' ? 'd-block' : 'd-none'"></div>
                        </router-link>
                    </li>
                    <li class="nav-item text-center logo">
                        <img src="logo.png" alt="" class="w-30">
                    </li>
                    <li class="nav-item d-flex justify-content-center align-items-center">
                        <router-link to="/about" class="nav-link" :class="$route.path === '/about' ? 'active' : ''">
                            <div class="up" :class="$route.path === '/about' ? 'd-block' : 'd-none'"></div>
                            <div class="left" :class="$route.path === '/about' ? 'd-block' : 'd-none'"></div>
                            <span :class="$route.path === '/about' ? 'color-blue-logo' : 'color-orange-logo'">About</span>
                            <div class="right" :class="$route.path === '/about' ? 'd-block' : 'd-none'"></div>
                            <div class="down" :class="$route.path === '/about' ? 'd-block' : 'd-none'"></div>
                        </router-link>
                    </li>
                    <li class="nav-item d-flex justify-content-center align-items-center">
                        <router-link to="/contact" class="nav-link" :class="$route.path === '/contact' ? 'active' : ''">
                            <div class="up" :class="$route.path === '/contact' ? 'd-block' : 'd-none'"></div>
                            <div class="left" :class="$route.path === '/contact' ? 'd-block' : 'd-none'"></div>
                            <span
                                :class="$route.path === '/contact' ? 'color-blue-logo' : 'color-orange-logo'">Contact</span>
                                <div class="right" :class="$route.path === '/contact' ? 'd-block' : 'd-none'"></div>
                            <div class="down" :class="$route.path === '/contact' ? 'd-block' : 'd-none'"></div>
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
    position: sticky; //era absolute
    top: 0;
    left: 0;
    z-index: 1;
    //height: 100vh;

    li {
        //position: absolute;
        width: calc(100% / 5);
        border-right: 3px solid $first-3;
        border-bottom: 3px solid $first-3;
        border-style: inset;
        background-color: $fourth;
        transition: all 0.2s ease-in-out;

        &:hover:not(.logo) {
            border-right: 3px solid $second-3;
            border-bottom: 3px solid $second-3;
        }
    }



    li:nth-child(3) {
        &:hover {
            border-bottom: 3px solid $second-3;
            //border-top-right-radius: 0;
        }
    }

    .nav-link {
        text-decoration: none;
        color: $third;
        font-size: 2rem;
        font-weight: semibold;
        letter-spacing: 5px;
        padding: 0 !important;
        position: relative;
    }

    .nav-link span {
        padding: 10px 20px;
    }
    
    .active {
        border: 3px solid #ff9f40;
    }


    .down {
        height: 3px;
        position: relative;
        background-color: $fourth;
        bottom: -3px;
        width: 90%;
        margin-left: auto;
    }

    .up {
        height: 3px;
        position: relative;
        background-color: $fourth;
        top: -3px;
        width: 90%;
    }

    .left {
        position: absolute;
        height: 80%;
        background-color: $fourth;
        width: 3px;
        top: -5px;
        left: -3px;
    }

    .right {
        position: absolute;
        height: 80%;
        background-color: $fourth;
        width: 3px;
        bottom: -5px;
        right: -3px;
    }
}
</style>