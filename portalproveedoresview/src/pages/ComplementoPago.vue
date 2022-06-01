<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8" style="margin: auto">
                    <complemento-form></complemento-form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ComplementoForm from './Complemento/ComplementoForm.vue'
export default {
    components: {
        ComplementoForm
    }    
}
</script>