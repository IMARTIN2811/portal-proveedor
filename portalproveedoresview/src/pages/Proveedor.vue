<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-8" style="margin: auto">
          <edit-proveedor-form>
          </edit-proveedor-form>
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
  import EditProveedorForm from './Proveedor/EditProveedorForm.vue'
  export default {
    components: {
      EditProveedorForm
    }
  }

</script>
<style>

</style>