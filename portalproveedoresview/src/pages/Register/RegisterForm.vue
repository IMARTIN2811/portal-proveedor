<template>
    <card>
        <h4 slot="header" class="card-title text-center">Registro</h4>
        <form>
            <div class="row">
                <div class="col-md-6">
                    <base-input type="text" label="Nombre" placeholder="Name" v-model="user.name"></base-input>
                </div>
                <div class="col-md-6">
                    <base-input type="text" label=Apellidos placeholder="Apellidos" v-model="user.apellidos"></base-input>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <base-input type="text" label="Username" placeholder="Username" v-model="user.username"></base-input>
                </div>
                <div class="col-md-6">
                    <base-input type="text" label="Email" placeholder="Email" v-model="user.email"></base-input>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">    
                    <base-input type="password" label="Password" placeholder="Password" v-model="user.password"></base-input>
                </div>
            </div>
            <div class="text-center">
                <button type="button" class="btn btn-info btn-fill float-left" @click.prevent="saveUsers">
                    Registrar
                </button>
            </div>
        </form>    
    </card>
</template>
<script>
export default {
    data(){
        return{
            user: {
                name: '',
                apellidos: '',
                username: '',
                email: '',
                password: ''
            }
        }
    },
    methods:{
        saveUsers(){
            alert('Your data:'+ JSON.stringify(this.user))
        }
    }
}
</script>