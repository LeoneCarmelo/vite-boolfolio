
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
        </div>
        <router-link to="/home">Go to Home</router-link>
    </template>

<style lang="scss" scoped>

</style>