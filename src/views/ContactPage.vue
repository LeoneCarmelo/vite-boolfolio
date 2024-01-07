<script>
import AppHeader from '../components/AppHeader.vue';
import axios from 'axios';
import { store } from '../store';
import NaviGate from '../components/NaviGate.vue';
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
  components: { AppHeader, NaviGate },
  mounted() {
    const send = document.querySelector('button[type="submit"]')
    send.addEventListener('mouseenter', () => {
      send.classList.remove('color-blue-logo')
      send.classList.add('color-orange-logo')
    })
    send.addEventListener('mouseleave', () => {
      send.classList.remove('color-orange-logo')
      send.classList.add('color-blue-logo')
    })
  },
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
    <!-- <AppHeader /> -->
    <NaviGate />
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 mt-5">
        <div class="col text-center">
          <transition-group class="advertise my-auto" tag="div" name="fade" mode="out-in">
            <h2 class="color-blue-logo mb-4 mb-md-0 animate__animated animate__zoomIn" key="heading">Let's build something, <span class="color-orange-logo">Together!</span></h2>
            <div class="contacts d-none d-md-block animate__animated animate__zoomInUp" key="contacts">
              <h3 class="color-blue-logo mt-5 fs-2 mb-3">Contacts</h3>
              <i class="color-orange-logo fs-5">carmeloleone@outlook.it</i>
              <ul class="my-4 list-unstyled">
                <li class="d-inline">
                  <a href="https://github.com/LeoneCarmelo" class="text-decoration-none">
                    <i class="fa-brands color-blue-logo fa-github fs-3"></i>
                  </a>
                </li>
                <li class="d-inline">
                  <a href="https://www.linkedin.com/in/leonecarmelo/" class="text-decoration-none">
                    <i class="fa-brands color-blue-logo fa-linkedin fs-3 mx-4"></i>
                  </a>
                </li>
                <li class="d-inline">
                  <!-- inserire link facebook profile -->
                  <a href="" class="text-decoration-none">
                    <i class="fa-brands color-blue-logo fa-facebook fs-3"></i>
                  </a>
                </li>
              </ul>
            </div>
          </transition-group>
        </div>
        <div class="col px-3">
          <div v-if="success" class="alert alert-success mt-4 mx-auto text-center d-flex justify-content-between align-items-center rounded-0" role="alert">
            <span class="fs-5"><strong class="me-2">Message Received!</strong> We will answer you as soon as possible.</span>
            <i class="fa fa-window-close ms-3 fs-5 transparent" aria-hidden="true" @click="success = null"></i>
          </div>

          <transition-group @submit.prevent="sendForm()" class="d-flex flex-column" tag="form" name="fade" mode="in-out">
            <div class="mb-3 animate__animated animate__backInRight" key="name" style="animation-delay: 0.25s;">
              <label for="name" class="form-label color-blue-logo fs-3">Name</label>
              <input v-model="name" type="text" name="name" id="name" class="form-control" placeholder="Ex: John Smith"
                aria-describedby="helpIdname" :class="{ 'is-invalid': errors.name }">
              <small id="helpIdname" class="color-orange-logo">Type your name.</small>
              <p v-for="(error, index) in errors.name" :key="`message-error-${index}`" class="text-danger">
                {{ error }}
              </p>
            </div>
            <div class="mb-3 animate__animated animate__backInRight" key="email" style="animation-delay: 0.5s;">
              <label for="email" class="form-label color-blue-logo fs-3">Email</label>
              <input v-model="email" type="email" name="email" id="email" class="form-control"
                placeholder="Ex: john@smith.com" aria-describedby="helpIdemail" :class="{ 'is-invalid': errors.email }">
              <small id="helpIdemail" class="color-orange-logo">Type your Email.</small>
              <p v-for="(error, index) in errors.email" :key="`message-error-${index}`" class="text-danger">
                {{ error }}
              </p>
            </div>
            <div class="mb-3 animate__animated animate__backInRight" key="message" style="animation-delay: 0.75s;">
              <label for="message" class="form-label color-blue-logo fs-3">Message</label>
              <textarea v-model="message" class="form-control" name="message" id="message" rows="5"
                :class="{ 'is-invalid': errors.message }" placeholder="Hi, I want a website!!"></textarea>
              <p v-for="(error, index) in errors.message" :key="`message-error-${index}`" class="text-danger">
                {{ error }}
              </p>
            </div>
            <button type="submit" class="btn color-blue-logo fs-2 text-uppercase align-self-end mt-1 fw-bold animate__animated animate__backInUp"
              :disabled="loading" key="send" style="animation-delay: 1s;">{{ loading ?
                'Sending...' : 'Send'
              }}</button>
          </transition-group>
        </div>
        <div class="col text-center d-md-none">
          <div class="advertise my-auto">
            <h3 class="color-blue-logo mt-5 fs-2 mb-3">Contacts</h3>
            <i class="color-orange-logo fs-5">carmeloleone@outlook.it</i>
            <ul class="my-4 list-unstyled">
              <li class="d-inline">
                <a href="https://github.com/LeoneCarmelo" class="text-decoration-none">
                  <i class="fa-brands color-blue-logo fa-github fs-3"></i>
                </a>
              </li>
              <li class="d-inline">
                <a href="https://www.linkedin.com/in/leonecarmelo/" class="text-decoration-none">
                  <i class="fa-brands color-blue-logo fa-linkedin fs-3 mx-4"></i>
                </a>
              </li>
              <li class="d-inline">
                <!-- inserire link facebook profile -->
                <a href="" class="text-decoration-none">
                  <i class="fa-brands color-blue-logo fa-facebook fs-3"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss';
@use '../styles/variables' as *;
@use '../styles/common' as *;

.alert-success {
  background: linear-gradient(to right, $first-1, $first-2, $first-3, $first-4, $first-5, $first-6, $first-7, $first-8);
  //background: linear-gradient(to right, $second-1, $second-2, $second-3, $second-4, $second-5, $second-6, $second-7, $second-8, $second-9, $second-10);
  border:0;
  i {
    cursor: pointer;
  }
}

h2 {
  font-size: 1.5rem;

  span {
    font-size: 2.5rem;
  }
}

@media screen and (min-width: 404px) {
  h2 {
    font-size: 2.5rem;
    span{
      font-size:3rem;
    }
  }
}

@media screen and (min-width: 768px) {
  h2 {
    font-size: 3rem;

    span {
      font-size: 3.5rem;
    }
  }
}
@media screen and (min-width: 1200px) {
  h2 {
    font-size: 3.5rem;

    span {
      font-size: 3.5rem;
    }
  }
}

.form-control::placeholder {
  background: $fourth;
  color: $grey-light;
}

.form-control {
  border: 0px;
  border-radius: 1px;
  color: $grey;
  background: $fourth;
  outline: revert;
  box-shadow: 0 0 3px $first-3;
  margin-bottom: 0.4rem;

  &:hover {
    box-shadow: 0 0 3px $second-3;
    border-bottom: 3px solid $second-3 !important;

  }

  &:focus-visible,
  &:active {
    background-color: $fourth;
    outline: none;
    color: $grey;
    box-shadow: 0 0 3px $second-3;
    border-bottom: 3px solid $second-3 !important;
  }
}

input {
  border-bottom: 3px solid $first-3 !important;
}

textarea {
  border-bottom: 3px solid $first-3 !important;
}</style>