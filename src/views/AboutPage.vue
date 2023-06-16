<script>
import AppHeader from '../components/AppHeader.vue';
import { store } from '../store';

export default {
    name: "AboutPage",
    data() {
        return {
            store
        };
    },
    components: { AppHeader }
}
</script>
        
<template>
    <div class="cont">
        <AppHeader/>
        <div class="container">
            <div class="row flex-column align-items-center mt-5">
                <div class="description w-50 mt-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempore debitis facilis aliquid velit
                    assumenda minus, exercitationem, quia nobis quaerat optio atque eum quae accusantium error voluptatum dolor
                    explicabo suscipit.
                </div>
                <div class="description w-50 my-5">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempore debitis facilis aliquid velit
                    assumenda minus, exercitationem, quia nobis quaerat optio atque eum quae accusantium error voluptatum dolor
                    explicabo suscipit.
                </div>
                <div class="description w-50">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur tempore debitis facilis aliquid velit
                    assumenda minus, exercitationem, quia nobis quaerat optio atque eum quae accusantium error voluptatum dolor
                    explicabo suscipit.
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variables' as *;
@use '../styles/common' as *;
</style>