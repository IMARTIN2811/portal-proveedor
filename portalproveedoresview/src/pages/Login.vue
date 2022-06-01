<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-5" style="margin: auto">
          <login-form>
          </login-form>
        </div>
        <!--
        <div class="col-md-4">
          <user-card>
          </user-card>
        </div>
        -->
      </div>
    </div>
  </div>
</template>
<script>
  import loginForm from './Login/LoginForm.vue'
  export default {
    components: {
      loginForm
    }
  }

</script>
<style>

</style>