<template>
  <div class="login">
    <LoginForm></LoginForm>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm'

export default {
  name: 'login',
  components: {
    LoginForm
  }
}
</script>

<style scoped>
.login {
  height: 100%
}
</style>
