<script>
import { store } from '../store';
export default {
    name: "HomePage",
    data() {
        return {
            store
        };
    },

}
</script>

<template>
    <h1  class="text-center py-4">My Portfolio</h1>

</template>


<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variables' as *;
@use '../styles/common' as *;


</style>