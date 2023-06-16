
<script>
import { store } from '../store';
    export default {
        name: 'NotFound',
        data() {
            return {
                store
            }
        }
    }
</script>

<template>
    <div class="text-center">
        not Found
        <router-link to="/">Go to Home</router-link>
    </div>
</template>

<style lang="scss" scoped>

</style>