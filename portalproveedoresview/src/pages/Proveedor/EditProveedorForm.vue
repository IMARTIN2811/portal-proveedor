<template>
  <card class="card-border">
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <h4 slot="header" class="card-title">Alta de proveedor</h4>
      <form @submit.prevent="handleSubmit(guardar)">
        <div class="row">
          <div class="col-md-6">
            <validation-provider name="nombre" :rules="{ required: true, alpha: true }" v-slot="validationContext">
              <label>Nombre</label>
              <b-form-input id="example-input-1" name="nombre" type="text" placeholder="Nombre"
                v-model="proveedor.nombre" :state="getValidaciones(validationContext)">
              </b-form-input>
              <b-form-invalid-feedback id="input-1-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </validation-provider>
          </div>
          <div class="col-md-6">
            <validation-provider name="nombre comercial" :rules="{ required:true, alpha: true }" v-slot="validationContext">
              <label>Nombre Comercial</label>
              <b-form-input id="example-input-2" name="nombreComercial" type="text" placeholder="Nombre Comercial"
                v-model="proveedor.nombreComercial" :state="getValidaciones(validationContext)">
              </b-form-input>
              <b-form-invalid-feedback id="input-2-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </validation-provider>
            <!--
            <base-input type="text" label="Nombre Comercial" placeholder="Nombre Comercial"
              v-model="proveedor.nombreComercial">
            </base-input>
            -->
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <validation-provider name="dirección" :rules="{ required:true }" v-slot="validationContext">
              <label>Dirección</label>
              <b-form-input id="example-input-3" name="direccion" type="text" placeholder="Dirección" 
                v-model="proveedor.direccion" :state="getValidaciones(validationContext)">
              </b-form-input>
              <b-form-invalid-feedback id="input-3-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </validation-provider>
          </div>
          <div class="col-md-6">
            <validation-provider name="distrito" :rules="{ required:true }" v-slot="validationContext">
              <label>Distrito</label>
              <b-form-input id="example-input-4" name="distrito" type="text" placeholder="Distrito"
                v-model="proveedor.distrito" :state="getValidaciones(validationContext)">
              </b-form-input>
              <b-form-invalid-feedback id="input-4-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </validation-provider>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <validation-provider name="codigo postal" :rules="{ required:true, numeric: true, min: 5 }" v-slot="validationContext">
              <label>Codigo postal</label>
              <b-form-input id="example-input-5" name="codigoPostal" placeholder="Código Postal"
                v-model="proveedor.codigoPostal" :state="getValidaciones(validationContext)">
              </b-form-input>
              <b-form-invalid-feedback id="input-5-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </validation-provider>
          </div>
          <div class="col-md-4">
            <validation-provider name="pais" :rules="{ required:true, alpha: true }" v-slot="validationContext">
              <label>Pais</label>
              <b-form-input id="example-input-6" name="pais" type="text" placeholder="País"
                v-model="proveedor.pais" :state="getValidaciones(validationContext)">
              </b-form-input>
              <b-form-invalid-feedback id="input-6-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </validation-provider>
          </div>
          <div class="col-md-4">
            <validation-provider name="region" :rules="{ required: true }" v-slot="validationContext">
              <label>Region</label>
              <b-form-input id="example-input-7" name="region" type="text" placeholder="Región"
                v-model="proveedor.region" :state="getValidaciones(validationContext)">
              </b-form-input>
              <b-form-invalid-feedback id="input-7-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </validation-provider>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <validation-provider name="telefono" :rules="{ required:true, numeric: true }" v-slot="validationContext">
              <label>Telefono</label>
              <b-form-input id="example-input-8" name="telefono" placeholder="Teléfono"
                v-model="proveedor.telefono" :state="getValidaciones(validationContext)">
              </b-form-input>
            <b-form-invalid-feedback id="input-8-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </validation-provider>
          </div>
          <div class="col-md-6">
            <validation-provider name="móvil" :rules="{ required:true, numeric: true }" v-slot="validationContext">
              <label>Movil</label>
              <b-form-input id="example-input-9" name="movil" placeholder="Movil"
                v-model="proveedor.movil" :state="getValidaciones(validationContext)">
              </b-form-input>
              <b-form-invalid-feedback id="input-9-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </validation-provider>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <validation-provider name="email" :rules="{ required: true, email: true }" v-slot="validationContext">
              <label>Email</label>
              <b-form-input id="example-input-10" name="email" type="email" placeholder="Email"
                v-model="proveedor.email" :state="getValidaciones(validationContext)">
              </b-form-input>
              <b-form-invalid-feedback id="input-10-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </validation-provider>
          </div>
          <div class="col-md-6">
            <validation-provider name="password" :rules="{ required: true, min: 5 }" v-slot="validationContext">
              <label>Password</label>
              <b-form-input id="example-input-11" name="password" type="password" placeholder="Password"
                v-model="proveedor.password" :state="getValidaciones(validationContext)">
              </b-form-input>
              <b-form-invalid-feedback id="input-11-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </validation-provider>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <validation-provider name="ramo" :rules="{ required: true }" v-slot="validationContext">
              <label>Ramo</label>
              <b-form-input id="example-input-12" name="ramo" type="text" placeholder="Ramo"
                v-model="proveedor.ramo" :state="getValidaciones(validationContext)">
              </b-form-input>
              <b-form-invalid-feedback id="input-12-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </validation-provider>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <validation-provider name="direccion estándar" :rules="{ required:true }" v-slot="validationContext">
              <label>Dirección estándar</label>
              <b-form-input id="example-input-13" name="direccionEstandar" type="text" placeholder="Direccion Estandar"
                v-model="proveedor.direccionEstandar" :state="getValidaciones(validationContext)">
              </b-form-input>
              <b-form-invalid-feedback id="input-13-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </validation-provider>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <validation-provider name="direccion fiscal" :rules="{ required:true }" v-slot="validationContext">
              <label>Dirección fiscal</label>
              <b-form-input id="example-input-14" name="direccionFiscal" type="text" placeholder="Direccion Fiscal"
                v-model="proveedor.direccionFiscal" :state="getValidaciones(validationContext)">
              </b-form-input>
              <b-form-invalid-feedback id="input-14-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </validation-provider>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <validation-provider name="direccion correspondencia" :rules="{ required:true }" v-slot="validationContext">
              <label>Dirección correspondencia</label>
              <b-form-input id="example-input-15" name="direccionCorrespondencia" type="text" placeholder="Direccion Correspondencia"
                v-model="proveedor.direccionCorrespondencia" :state="getValidaciones(validationContext)">
              </b-form-input>
              <b-form-invalid-feedback id="input-15-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </validation-provider>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <validation-provider name="id" :rules="{ required: true }" v-slot="validationContext">
              <label>Id</label>
              <b-form-input id="example-input-16" name="bancoId" type="number" placeholder="Id"
                v-model="proveedor.bancoId" :state="getValidaciones(validationContext)">
              </b-form-input>
              <b-form-invalid-feedback id="input-16-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </validation-provider>
          </div>
          <div class="col-md-4">
            <validation-provider name="país" :rules="{ required:true, alpha:true }" v-slot="validationContext">
              <label>País</label>
              <b-form-input id="example-input-17" name="pais" type="text" placeholder="País"
                v-model="proveedor.bancoPais" :state="getValidaciones(validationContext)">
              </b-form-input>
              <b-form-invalid-feedback id="input-17-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </validation-provider>
          </div>
          <div class="col-md-4">
            <validation-provider name="banco" :rules="{ required: true }" v-slot="validationContext">
              <label>Banco</label>
              <b-form-input id="example-input-18" name="banco" type="text" placeholder="Banco"
                v-model="proveedor.bancoNombre" :state="getValidaciones(validationContext)">
              </b-form-input>
              <b-form-invalid-feedback id="input-18-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </validation-provider>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <validation-provider name="clabe" :rules="{ required: true }" v-slot="validationContext">
              <label>CLABE</label>
              <b-form-input id="example-input-19" name="clabe" type="text" placeholder="CLABE"
                v-model="proveedor.clabe" :state="getValidaciones(validationContext)">
              </b-form-input>
              <b-form-invalid-feedback id="input-19-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </validation-provider>
          </div>
          <div class="col-md-4">
            <validation-provider name="swift" :rules="{ required: true }" v-slot="validationContext">
              <label>Swift</label>
              <b-form-input id="example-input-20" name="swift" type="text" placeholder="Swift"
                v-model="proveedor.swift" :state="getValidaciones(validationContext)">
              </b-form-input>
              <b-form-invalid-feedback id="input-20-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
            </validation-provider>
          </div>
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-info btn-fill float-right">Guardar
          </button>
          <!--
          <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="guardar">Guardar
          </button>
          -->
        </div>
        <div class="clearfix"></div>
      </form>
    </validation-observer>
  </card>
</template>
<script>
import BaseInput from '../../components/Inputs/BaseInput.vue';
import proveedorService from '../services/proveedor.service';
const axios = require('axios').default;

export default {
  components: { BaseInput },
  data() {
    return {
      content : [],
      contenido: null,
      proveedor: {
        nombre: "",
        nombreComercial: "",
        email: "",
        password:"",
        direccion: "",
        distrito: "",
        codigoPostal: "",
        pais: "",
        telefono: "",
        movil: "",
        ramo: "",
        direccionEstandar: "",
        direccionFiscal: "",
        direccionCorrespondencia: "",
        caratula: "",
        bancoId: "",
        bancoPais: "",
        bancoNombre: "",
        clabe: "",
        swift: ""
      },
    };
  },

  mounted(){
    this.getAllProv();
  },

  methods: {
    getValidaciones({dirty,validated,valid = null}){
      return dirty || validated ? valid :  null;
    },

    guardar() {
      alert("Your data: " + JSON.stringify(this.proveedor));
      axios
        .post("http://localhost:3000/api/proveedores", this.proveedor)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    getAllProv(){
    proveedorService.getProveedor()
      .then((response)=>{
        this.content = response.data;
        console.log(response.data);
      }).catch(err=>{
        console.log(err)
      })
    },

    getIdProv(id){
      proveedorService.getProveedorId(id)
        .then(response =>{
          this.contenido = response.data;
          console.log(response.data);
        })
        .catch(e=>{
          console.log(e)
        });
    },

    updateProv(){
      proveedorService.getProveedorUpdate(this.contenido.id,this.contenido)
        .then(response=>{
          console.log(response.data);
        })
        .catch(err=>{
          console.log(err);  
        });
    },

    deleteProv(){
      proveedorService.getProveedorDelete(this.contenido.id)
        .then(response =>{
          console.log(response.data);
        })
        .catch(err=>{
          console.log(err);
        });
    }

  },
}
</script>
<style>
</style>
