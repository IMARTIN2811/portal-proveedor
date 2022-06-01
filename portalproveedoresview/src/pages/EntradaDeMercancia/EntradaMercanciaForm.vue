<template>
  <card class="card-border">
    <validation-observer ref="observer" v-slot="{ handleSubmit }">
      <h4 slot="header" class="card-title">Entrada de mercancia</h4>
        <form @submit.prevent="handleSubmit(entradaMercancia)">
            <div class="row">
              <div class="col-md-6">
                <validation-provider name="Pedido" :rules="{ required: true }" v-slot="validationContext">
                  <label for="exampleFormControlSelect1">Pedido</label>
                    <b-form-select id="example-input-1" name="pedido" class="form-control" v-model="selecPed" :options="optionPed"
                      :state="getValidationState(validationContext)">
                    </b-form-select>
                  <b-form-invalid-feedback id="input-1-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>  
                </validation-provider> 
              </div>
              <div class="col-md-6">                
                <validation-provider name="Nombre comercial" :rules="{ required: true }" v-slot="validationContext">
                  <label>Nombre comercial</label>
                  <b-form-input type="text" id="example-input-2" name="nombreComercial" placeholder="Nombre Comercial"
                    v-model="mercancia.nombreComercial" :state="getValidationState(validationContext)"
                    aria-describedby="input-2-live-feedback">
                  </b-form-input>
                  <b-form-invalid-feedback id="input-2-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </validation-provider>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <validation-provider name="Sociedad" :rules="{ required: true }" v-slot="validationContext">
                  <label for="exampleFormControlSelect2">Sociedad</label>
                  <b-form-select id="example-input-3" name="sociedad" class="form-control" v-model="selecSoc" :options="optionSoc"
                    :state="getValidationState(validationContext)">
                  </b-form-select>
                  <b-form-invalid-feedback id="input-3-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </validation-provider>
              </div>
              <div class="col-md-6">
                <validation-provider name="Fecha documento" :rules="{ required: true }" v-slot="validationContext">
                  <label>Fecha documento</label>
                  <b-form-input id="example-input-4" name="fechaDocumento" type="date" label="Fecha Documento"
                    placeholder="Fecha Documento" v-model="mercancia.fechaDocumento" :state="getValidationState(validationContext)">
                  </b-form-input>
                  <b-form-invalid-feedback id="input-4-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </validation-provider>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <validation-provider name="Mercancía" :rules="{ required: true }" v-slot="validationContext">
                  <label for="exampleFormControlSelect3">Mercancía</label>
                  <b-form-select id="example-input-5" name="entradaDeMercancia" class="form-control" v-model="selecMer" :options="optionMer"
                    :state="getValidationState(validationContext)">
                  </b-form-select>
                  <b-form-invalid-feedback id="input-5-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </validation-provider>
              </div>
              <div class="col-md-6">
                <validation-provider name="Posicion" :rules="{ required: true }" v-slot="validationContext">
                  <label>Posicion</label>
                  <b-form-input id="example-input-6" name="Posicion" type="text" placeholder="Posición" v-model="mercancia.posicion"
                    :state="getValidationState(validationContext)">
                  </b-form-input>
                  <b-form-invalid-feedback id="input-6-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </validation-provider>
              </div>
            </div>
              <div class="row">
                <div class="col-md-7">
                  <validation-provider name="material" :rules="{ required: true }" v-slot="validationContext">
                    <label>Material</label>
                    <b-form-input id="example-input-7" name="material" type="text" placeholder="Material" v-model="mercancia.material"
                      :state="getValidationState(validationContext)">
                    </b-form-input>
                    <b-form-invalid-feedback id="input-7-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                    </validation-provider>
                </div>
              </div>
              <div class="row">
                <div class="col-md-7">
                  <validation-provider name="Cargar archivo" :rules="{ required: true }" v-slot="validationContext">
                    <label>Cargar archivo XML</label>
                      <b-form-file id="example-input-8" name="archivo" class="form-control" plain v-model="mercancia.archivo"  
                        :state="getValidationState(validationContext)" multiple>
                      </b-form-file>
                      <!--
                      <b-form-file id="example-input-8" name="archivo" placeholder="Seleccione el archivo..."
                        v-model="mercancia.archivo" :state="getValidationState(validationContext)">
                      </b-form-file>
                     -->
                    <b-form-invalid-feedback id="input-8-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                  </validation-provider>
                </div>
              </div>
            <div class="row">
              <div class="col-md-12">
                <validation-provider name="Texto" :rules="{ required: true }" v-slot="validationContext">
                  <label>Texto breve</label>
                  <b-form-input id="example-input-9" type="text" name="textoBreve" placeholder="Texto breve" v-model="mercancia.textobreve"
                    :state="getValidationState(validationContext)">
                  </b-form-input>
                  <b-form-invalid-feedback id="input-9-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </validation-provider>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <validation-provider name="Cantidad" :rules="{ required: true }" v-slot="validationContext">
                  <label>Cantidad EM</label>
                  <b-form-input id="example-input-10" name="cantidadEM" placeholder="Cantidad EM" v-model="mercancia.cantidadEM"
                    :state="getValidationState(validationContext)">
                  </b-form-input>
                  <b-form-invalid-feedback id="input-10-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </validation-provider>
              </div>
              <div class="col-md-4">
                <validation-provider name="Moneda" :rules="{ required: true, alpha: true }" v-slot="validationContext">
                  <label>Moneda</label>
                  <b-form-input id="example-input-11" type="text" name="moneda" placeholder="Moneda" v-model="mercancia.moneda"
                    :state="getValidationState(validationContext)">
                  </b-form-input>
                  <b-form-invalid-feedback id="input-11-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </validation-provider>
              </div>
              <div class="col-md-4">
                <validation-provider name="Monto total" :rules="{ required: true }" v-slot="validationContext">
                  <label>Monto Total</label>
                  <b-form-input id="example-input-12" name="montoTotal" placeholder="Monto Total"
                    v-model="mercancia.montoTotal" :state="getValidationState(validationContext)">
                  </b-form-input>
                  <b-form-invalid-feedback id="input-12-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </validation-provider>
              </div>
            </div>
            <dix class="row">
              <div class="col-md-4">
                <validation-provider name="Referencia" :rules="{ required: true }" v-slot="validationContext">
                  <label>Referencia</label>                
                  <b-form-input id="example-input-14" type="text" name="referencia" placeholder="Referencia"
                    v-model="mercancia.referencia" :state="getValidationState(validationContext)">
                  </b-form-input>
                  <b-form-invalid-feedback id="input-13-live-feedback">{{ validationContext.errors[0] }}</b-form-invalid-feedback>
                </validation-provider>
              </div>
                <div class="col-md-4">
                  <base-input type="text" label="CHECK" placeholder="CHECK" v-model="mercancia.check"></base-input>
                </div>
            </dix>
            <div class="text-center">
              <button type="submit" variant="primary" class="btn btn-info btn-fill float-right">
                Guardar
              </button>
              <!--
                <button type="submit" class="btn btn-info btn-fill float-right" @click.prevent="entradaMercancia">
                  Guardar
                </button>
              -->
            </div>
            <div class="clearfix"></div>
        </form>
    </validation-observer>
  </card>
</template>
<script>

  import mercanciaService from "../services/mercancia.service";
  const axios = require('axios');

  export default {
    data () {
      return {    
        content : [],
        contenido: [],
        errored: false,
        selecPed: null,
        selecSoc: null,
        selecMer: null,
        mercancia: {
          pedido: '',
          nombreComercial: '',
          sociedad: '',
          fechaDocumento: '',
          entradaDeMercancia: '',
          posicion: '',
          material: '',
          archivo: null,
          textoBreve: '',
          cantidadEM:'',
          montoTotal: '',
          referencia: '',
          check: ''
        },
        optionPed:[
          { value: null, text: 'Seleccionar pedido' },
          { value: '1', text: '4500007303' }
        ],
        optionSoc: [
          { value: null, text: 'Seleccionar sociedad' },
          { value: '1', text: '0020' }
        ],  
        optionMer: [
          { value: null, text: 'Seleccionar mercancía' },
          { value: '1', text: '5000020211' }
        ]
      };
    },
    mounted(){
      this.getAll();
    },

    methods: {
      getValidationState({dirty,validated,valid = null}){
        return dirty || validated ? valid : null;
      },

      getAll(){
        mercanciaService.getMercancia()
          .then((response)=>{
            this.content = response.data;
            console.log(response.data);
          }).catch(err=>{
            console.log(err)
            this.errored = true
          })
      },

      getId(id){
        mercanciaService.getMercanciaId(id)
          .then(response =>{
            this.contenido = response.data;
            console.log(response.data);
          })
          .catch(e=>{
            console.log(e)
          });
      },

      updateMerc(){
        mercanciaService.getMercanciaUpdate(this.contenido.id, this.contenido)
          .then(response =>{
            console.log(response.data);
          })
          .catch(err=>{
            console.log(err);
          });
      },  

      deleteMerc(){
        mercanciaService.getMercanciaDelete(this.contenido.id)
          .then(response =>{
            console.log(response.data);
          })
          .catch(err=>{
            console.log(err);
          });
      },

      entradaMercancia () {
        alert('Your data: ' + JSON.stringify(this.mercancia))
      }
    }
  }

</script>
<style>
</style>