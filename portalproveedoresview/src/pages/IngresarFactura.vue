<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8" style="margin: auto">
                    <ingresar-form></ingresar-form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import IngresarForm from './Facturas/IngresarForm.vue';
    export default {
        components: {
            IngresarForm
        }
    }
</script>