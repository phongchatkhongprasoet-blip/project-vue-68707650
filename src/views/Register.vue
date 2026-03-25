<template>
  <div class="d-flex justify-content-center align-items-center vh-100">
    <div class="card shadow p-4" style="width: 350px; border-radius: 15px;">
      <h3 class="text-center mb-4">Login</h3>
      <form @submit.prevent="handleSubmit">
        <div class="mb-3">
          <label for="name" class="form-label">Firstname-Lastname</label>
          <input type="text" class="form-control" v-model="form.name" placeholder="First-Last" required>
        </div>
        <div class="mb-3">
          <label for="username" class="form-label">Username</label>
          <input type="text" class="form-control" v-model="form.username" placeholder="Enter username" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" v-model="form.password" placeholder="Enter password" required>
        </div>
        <div class="mb-3">
          <label for="tel" class="form-label">Telephone</label>
          <input type="tel" class="form-control" v-model="form.tel" placeholder="094-xxx-xxxx" required>
        </div>
        <button type="submit" class="btn btn-primary w-100">Register</button>
        <div class="text-center mt-3">
          <small><a href="#">Forgot Password?</a></small>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      form: {
        name: '',
        username: '',
        password: '',
        tel: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission (e.g., send data to an API)
      console.log('Form submitted:', this.form);
    }
  }
};
</script>

<style scoped>
/* Optional: You can add custom styles here, but Bootstrap is handling most of the layout */
</style>