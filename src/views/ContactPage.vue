<script>
import AppHeader from '../components/AppHeader.vue';
import axios from 'axios';
import { store } from '../store';
export default {
  name: "ContactPage",
  data() {
    return {
      store,
      name: '',
      email: '',
      message: '',
      loading: false,
      success: false,
      errors: {}
    };
  },
  components: { AppHeader },
  methods: {
    sendForm() {
      this.loading = true;
      const data = {
        name: this.name,
        email: this.email,
        message: this.message
      };

      // pulisco l'array con i messaggi
      this.errors = {};

      // Importante - Stiamo comunicando con Laravel, quindi non è più obbligatorio inserire gli headers con il Content-Type
      // come abbiamo fatto invece quando comunicavamo direttamente con gli script PHP
      axios.post(`${this.store.base_url}api/contacts`, data).then((response) => {
        this.success = response.data.success;
        if (!this.success) {
          this.errors = response.data.errors;
        } else {
          // ripulisco i campi di input
          this.name = '';
          this.email = '';
          this.message = '';
        }
        this.loading = false;
      });
    },
  }
}
</script>
        
<template>
  <div class="cont">
    <AppHeader />
    <div class="container">
      <div class="row">
        <div class="alert alert-success mt-4 w-75 mx-auto text-center" role="alert">
          <strong>Message Received!</strong> We will answer you as soon as possible.
        </div>
        
        <form @submit.prevent="sendForm()" class="py-5 d-flex flex-column">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input v-model="name" type="text" name="name" id="name" class="form-control" placeholder="Ex: John Smith"
              aria-describedby="helpIdname" :class="{ 'is-invalid': errors.name }">
            <small id="helpIdname" class="text-muted">Type your name.</small>
            <p v-for="(error, index) in errors.name" :key="`message-error-${index}`" class="text-danger">
              {{ error }}
            </p>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input v-model="email" type="email" name="email" id="email" class="form-control"
              placeholder="Ex: john@smith.com" aria-describedby="helpIdemail" :class="{ 'is-invalid': errors.email }">
            <small id="helpIdemail" class="text-muted">Type your Email.</small>
            <p v-for="(error, index) in errors.email" :key="`message-error-${index}`" class="text-danger">
              {{ error }}
            </p>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea v-model="message" class="form-control" name="message" id="message" rows="5"
              :class="{ 'is-invalid': errors.message }"></textarea>
            <p v-for="(error, index) in errors.message" :key="`message-error-${index}`" class="text-danger">
              {{ error }}
            </p>
          </div>
          <button type="submit" class="btn btn-outline-dark text-uppercase w-25 align-self-end mt-5 fw-bold"
            :disabled="loading">{{ loading ?
              'Sending...' : 'Send'
            }}</button>
        </form>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>