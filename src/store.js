import { reactive } from 'vue'
const store = reactive({
    active:true,
    base_url: 'http://127.0.0.1:8000/',
    end_point_projects: 'api/projects/',
})

export { store }