<script>
export default {
    name: 'GoBack',
    methods: {
        goBack() {
            return this.$router.go(-1)
        }
    }
}
</script>
        
<template>
    <span class="go-back">
        <button @click="goBack" class="btn">
            <i class="fa-solid fa-arrow-left fs-1"></i>
        </button>
    </span>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variables' as *;
.fa-solid {
    color:$fourth;
    transition: color 0.8s ease;
}
.go-back:hover .fa-solid {
    color: $second-8 !important;
}
</style>