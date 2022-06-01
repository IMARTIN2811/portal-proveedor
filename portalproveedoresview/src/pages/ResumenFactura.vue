<template>
    <div class="content">
        <div class="container-fluid">
            <div class="col-md-10" style="margin: auto">
                <resumen-factura-form></resumen-factura-form>
            </div>
        </div>
    </div>
</template>
<script>
import ResumenFacturaForm from './Facturas/ResumenFacturaForm.vue'
export default {
    components: {
        ResumenFacturaForm
    }    
}
</script>