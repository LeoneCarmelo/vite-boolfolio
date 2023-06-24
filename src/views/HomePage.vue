<script>
import { store } from '../store';
import AppHeader from '../components/AppHeader.vue';
export default {
    name: "HomePage",
    components:{
    AppHeader,

},
    data() {
        return {
            store
        };
    },

}
</script>

<template>
    <div class="cont">
        <AppHeader />
        <div class="container overflow_y_hide">
            <div class="row">
                <div class="col mt-5">
                    <h1>I'm <br><span>Carmelo Leone</span><br>Full Stack Developer based on the Netherlands.</h1>
                </div>
                <div class="col"></div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variables' as *;
@use '../styles/common' as *;
.cont {
    background-image: url('lion4.png'), linear-gradient(to right, white, black);
    background-repeat: no-repeat, no-repeat;
    background-position: right, center;
    background-size: contain;

    
}
.container {
    height:calc(100vh - 80px);
}
span {
    font-family: 'Comforter', cursive;
        color: $dark;
        font-size: 7rem;
}

</style>