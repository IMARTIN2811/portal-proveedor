<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8" style="margin: auto">
                    <ayuda-form></ayuda-form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AyudaForm from './Help/AyudaForm.vue'
export default {
    components: {
        AyudaForm
    }
}
</script>