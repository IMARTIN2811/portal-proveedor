<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8" style="margin: auto">
          <entrada-mercancia-form>
          </entrada-mercancia-form>
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
  import EntradaMercanciaForm from './EntradaDeMercancia/EntradaMercanciaForm.vue';
  export default {
    components: {
      EntradaMercanciaForm
    }
  }

</script>
<style>

</style>