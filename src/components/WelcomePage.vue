<script>
import { store } from '../store'
export default {
    name: 'WelcomePage',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="welcome_page">
        <h1 class="name">
            Carmelo Leone
        </h1>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/variables' as *;

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
        font-size: 6rem;
    }
}
</style>