<template>
  <card class="card-border" style="margin-top:60px;">
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <h4 slot="header" class="card-title text-center">Login</h4>
      <form @submit.stop.prevent="handleSubmit(updateProfile)">
        <!---->
        <div class="row justify-content-center">
          <!--col-md-10-->
          <div class="col-md-9">
              <div>
                <validation-provider name="email" :rules="{ required: true, email: true }" v-slot="validationContext">
                  <label for="">Email</label>
                  <b-form-input id="example-input-1" name="email" placeholder="Introduce su correo" 
                    v-model="signin.email" :state="getValidaciones(validationContext)">
                  </b-form-input>
                  <b-form-invalid-feedback id="input-1-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </validation-provider>
              </div>
              <div class="mt-2">
                <validation-provider name="Password" :rules="{ required: true }" v-slot="validationContext">
                  <label>Password</label>
                  <b-form-input id="example-input-2" name="password" type="password" placeholder="Introduce su contraseña" 
                    v-model="signin.password" :state="getValidaciones(validationContext)">
                  </b-form-input>
                  <b-form-invalid-feedback id="input-2-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </validation-provider>
              </div>
              <div class="mt-3 text-center">
                <button type="submit" class="btn btn-warning btn-fill btn-sm mr-1">
                  ENTRAR
                </button>
              </div>
              <div class="text-center">
                <a href="#" class="badge badge-pill badge-light">¿Has olvidado tu contraseña?</a>
              </div>
              <div class="mt-2 text-center">
                <a >¿No tienes cuenta?</a><a href="#" class="badge badge-light">Registrar</a>
              </div>
          </div>
          <!--
          <div class="ml-2">
              <div class="content-escritorio">
                <div class="border-img" style="width: 13rem;">
                  <img class=" rounded-circle img-fluid" src="img/user.jpg"  alt="...">   
                </div>
                <div class="div-color text-center">
                  <button type="button"  class="mt-2 btn btn-warning btn-fill btn-sm">
                      REGISTRAR
                  </button>
                </div>
              </div>
          </div>
          -->
        </div>
      </form>
    </validation-observer>
  </card>
</template>
<script>
  export default {
    data() {
      return {
        signin: {
        email: '',
        password: ''     
        }
      }
    },
    methods: {
      getValidaciones({dirty,validated,valid = null}){
        return dirty || validated ? valid : null;        
      },

      updateProfile() {
        alert('Your data:' + JSON.stringify(this.signin))
      }
    }
  }
</script>
<style >
.border-img{
  text-align: center;
  background-color: #727070;
  border-radius: 5px 5px 0px 0px;
}

.div-color{
  margin-top: 10px;
  height: 50px;
  background-color: #727070;
  border-radius: 0px 0px 5px 5px;
}


/* Con esto lo ocultamos en la pc y se deja visible solo en mobile*/ 
@media screen and (min-width: 800px) { 
	.mostrarenmobile{
		display: none;
	}
}

/*oculta la img y el btn registrar en movil*/
@media (max-width: 768px) {
        .hidden-mobile {
          display: none;
        }
      }

.content-escritorio{
    display: block;
  }
.content-movil{
  display: none;
}
  
@media screen and (max-width: 768px) {
  .content-escritorio{
    display: none;
  }
  .content-movil{
    display: block;
  }
}

.card-form{
  box-shadow: 0px 0px 3px grey;
  margin-top: 60px;
  /* 
  height: 330px;
  
  
  */
}

</style>