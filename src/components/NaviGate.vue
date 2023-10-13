<script>
export default {
    name: 'NaviGate',
}
</script>
        
<template>
    <nav class="navbar navbar-expand-md p-0">
        <div class="container-fluid p-0">
            <button class="navbar-toggler m-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <!-- <span class="navbar-toggler-icon"></span> -->
                <img src="logo.png" alt="logo" loading="lazy" style="width:50px; height:50px; object-position: cover;">
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav justify-content-center ms-3 ms-md-0  gap-2 gap-md-0 flex-wrap">
                    <li class="nav-item d-flex justify-content-center align-items-center"
                        :class="$route.path === '/' ? 'active' : ''">
                        <router-link to="/" class="nav-link">
                            <span :class="$route.path === '/' ? 'color-blue-logo' : 'color-orange-logo'">Home</span>
                        </router-link>
                    </li>
                    <li class="nav-item d-flex justify-content-center align-items-center"
                        :class="$route.path === '/projects' ? 'active' : ''">
                        <router-link to="/projects" class="nav-link">
                            <span
                                :class="$route.path === '/projects' ? 'color-blue-logo' : 'color-orange-logo'">Projects</span>
                        </router-link>
                    </li>
                    <li class="nav-item text-center logo d-none d-md-block">
                        <img src="logo.png" alt="" class="w-30" loading="lazy">
                    </li>
                    <li class="nav-item d-flex justify-content-center align-items-center"
                        :class="$route.path === '/about' ? 'active' : ''">
                        <router-link to="/about" class="nav-link">
                            <span :class="$route.path === '/about' ? 'color-blue-logo' : 'color-orange-logo'">About</span>
                        </router-link>
                    </li>
                    <li class="nav-item d-flex justify-content-center align-items-center"
                        :class="$route.path === '/contact' ? 'active' : ''">
                        <router-link to="/contact" class="nav-link">
                            <span
                                :class="$route.path === '/contact' ? 'color-blue-logo' : 'color-orange-logo'">Contact</span>
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

.navbar-toggler {
    box-shadow: 0 0 3px $first-3;
    border: 0;
    outline: 0;

    &:hover,
    &:active,
    &:focus,
    &:focus-visible {
        box-shadow: 0 0 3px $second-3;
    }

}

.navbar {
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;

    ul {
        flex-direction:row;
        flex-wrap:wrap;
    }

    li {
        left: 100px;
        background-color: $fourth;
        transition: all 0.2s ease-in-out;

        &:hover:not(.logo) {
            box-shadow: 0 0 3px $first-3;
        }
    }



    li:nth-child(3) {
        &:hover {
            border-bottom: 3px solid $second-3;
        }
    }

    .nav-link {
        text-decoration: none;
        font-size: 2rem;
        font-weight: semibold;
        letter-spacing: 5px;
        padding: 0 !important;
        position: relative;
    }

    .nav-link span {
        padding: 0px 5px;
    }

}

@media screen and (min-width:768px) {
    li {
        width: calc(100% / 5);
        border-right: 3px solid $first-3;
        border-bottom: 3px solid $first-3;
        border-style: inset;
        background-color: $fourth;
        transition: all 0.2s ease-in-out;

        &:hover:not(.logo) {
            box-shadow: none !important;
            border-top: 3px solid $second-3;
        }
    }
    .active {
        border-top: 3px solid $second-7;
        border-bottom: 3px solid $second-3 !important;
    }
}</style>