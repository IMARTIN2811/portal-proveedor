<template>
    <div class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8">
                    <register-form></register-form>
                </div>
                <div class="col-md-4">
                    <user-card></user-card>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import RegisterForm from './Register/RegisterForm.vue'
export default {
    components:{
        RegisterForm
    }
}
</script>