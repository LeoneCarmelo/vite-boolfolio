<script>
import { store } from '../store';
export default {
    name: 'HomePage',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <h1 v-if="!store.whole_page" class="text-center py-4">My Portfolio</h1>
</template>


<style lang="scss" scoped></style>