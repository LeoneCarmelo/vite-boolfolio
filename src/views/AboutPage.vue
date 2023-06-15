<script>
export default {
    name: 'AboutPage'
}
</script>
        
<template>
    <div class="container">
        <div class="row">
            <div class="col"></div>
            <div class="col mt-5">
                <h1>I'm <br><span>Carmelo Leone</span><br>Full Stack Developer based on the Netherlands.</h1>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variables' as *;
@use '../styles/common' as *;

span {
    font-family: 'Comforter', cursive;
        color: $dark;
        font-size: 7rem;
}
</style>