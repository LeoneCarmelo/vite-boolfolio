<script>
export default {
    name: 'NaviGate'
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
                        <router-link to="/" class="nav-link d-flex justify-content-start align-items-start w-100 h-100">
                            <div class="p-2">
                                <i class="fa-solid ps-2 fa-house-chimney fs-1"
                                    :class="$route.path === '/' ? '' : 'fa-beat'"></i>
                                <span class="px-2 fs-1 fw-semibold d-none d-xl-inline">Home</span>
                            </div>
                        </router-link>
                    </li>
                    <li class="w-25 h-25">
                        <router-link to="/projects"
                            class="nav-link d-flex justify-content-end align-items-start w-100 h-100">
                            <div class="p-2">
                                <span class="px-2 fs-1 fw-semibold d-none d-xl-inline">Projects</span>
                                <i class="fa-solid ps-2 fa-folder-open fs-1 fa-beat"></i>
                            </div>
                        </router-link>
                    </li>
                    <li class="w-25 h-25">
                        <router-link to="/about" class="nav-link d-flex justify-content-start align-items-end w-100 h-100">
                            <div class="p-2">
                                <i class="fa-solid ps-2 fa-info fs-1 fa-beat"></i>
                                <span class="px-2 fs-1 fw-semibold d-none d-xl-inline">About</span>
                            </div>
                        </router-link>
                    </li>
                    <li class="w-25 h-25">
                        <router-link to="/contact" class="nav-link d-flex justify-content-end align-items-end w-100 h-100">
                            <div class="p-2">
                                <span class="px-2 fs-1 fw-semibold d-none d-xl-inline">Contact</span>
                                <i class="fa-solid ps-2 fa-user-tie fs-1 fa-beat"></i>
                            </div>
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
        div.p-2 {
                   transform: translate(0);
                   transition:transform 0.47s ease;
        }
    }
    
    li:nth-child(1) {
        top: 0;
        left: 0;
        border-bottom-right-radius: 100%;
        transition: all 0.5s ease-in-out;

        &:hover {
            border-bottom-right-radius: 0;

            div.p-2 {
            transform: translate(40%, 50%);
            }
        }

    }

    li:nth-child(2) {
        top: 0;
        right: 0;
        border-bottom-left-radius: 100%;
        transition: border-bottom-left-radius 0.5s ease-in-out;

        &:hover {
            border-bottom-left-radius: 0;
            div.p-2 {
            transform: translate(-20%, 50%);
            }
        }
    }

    li:nth-child(3) {
        bottom: 0;
        left: 0;
        border-top-right-radius: 100%;
        transition: border-top-right-radius 0.5s ease-in-out;

        &:hover {
            border-top-right-radius: 0;
            div.p-2 {
            transform: translate(50%, -50%);
            }
        }
    }

    li:nth-child(4) {
        bottom: 0;
        right: 0;
        border-top-left-radius: 100%;
        transition: border-top-left-radius 0.5s ease-in-out;

        &:hover {
            border-top-left-radius: 0;
            div.p-2 {
            transform: translate(-30%, -50%);
            }
        }
    }

    .nav-link {
        text-decoration: none;
        color: $third;
        font-size: 2rem;
        font-weight: semibold;
        letter-spacing: 5px;
        padding: 0 !important;
    }



}
</style>