<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8" style="margin: auto">
                    <datos-form></datos-form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import DatosForm from './Datos/DatosForm.vue'
    export default {
        components: {
            DatosForm
        }
    }
</script>