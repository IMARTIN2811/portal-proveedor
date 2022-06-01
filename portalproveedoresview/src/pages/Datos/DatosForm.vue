<template>
    <card class="card-border">
        <form>
            <card>
                <h5 class="card-title font-weight-bold">DATOS FISCALES</h5>
                <div class="row">
                    <hr width=610 color=#F7D358>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <label for="">rfc</label>
                        <b-form-input type=""></b-form-input>
                    </div>
                    <div class="col-md-6">
                        <label for="">razon social</label>
                        <b-form-input type=""></b-form-input>
                    </div>
                </div>
            </card>
            <card>
                <h5 class="card-title font-weight-bold">DATOS DE COBRANZA</h5>
                <div class="row">
                    <hr width=610 color=#F7D358>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <label for="">lada</label>
                        <b-form-input type=""></b-form-input>
                    </div>
                    <div class="col-md-4">
                        <label for="">tel</label>
                        <b-form-input type=""></b-form-input>
                    </div>
                    <div class="col-md-4">
                        <label for="">ext</label>
                        <b-form-input type=""></b-form-input>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <label for="">Correo electrónico</label>
                        <b-form-input type=""></b-form-input>
                    </div>
                </div>
            </card>
            <card>
                <h5 class="card-title font-weight-bold">DATOS BANCARIOS</h5>
                <div class="row">
                    <hr width=610 color=#F7D358>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="input-group">
                            <b-form-input type="text" placeholder="Buscar"></b-form-input>
                            <div class="input-group-append">
                                <button class="btn btn-outline-secondary pb-1" type="button">
                                    <i class="fa fa-search" aria-hidden="true"></i> 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt-2">
                    <table class="table table-bordered table-striped table-responsive-sm">
                        <thead class="table-dark">
                            <tr>
                                <th>Titulo de la cuenta</th>
                                <th>Banco</th>
                                <th>Clave del banco</th>
                                <th>Cuenta</th>
                                <th>Pais</th>
                            </tr>
                        </thead>
                        <tbody class="">
                            <tr>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </card>
        </form>
    </card>
</template>
<style>


</style>