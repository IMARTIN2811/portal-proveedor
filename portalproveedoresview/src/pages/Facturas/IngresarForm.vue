<template>
    <card class="card-border">
        <form action="">
            <card>
                <h5 class="card-title font-weight-bold">
                    INGRESAR FACTURA
                </h5>
                <div class="row">
                <hr width=610 color=#F7D358>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <label for="exampleFormControlSelect1">empresa</label>
                        <b-form-select id="example-input-1" name="pedido" class="form-control">
                        </b-form-select>
                    </div>
                </div>
            </card>
            <card>
                <div class="row">
                    <div class="col-md-6">
                        <div class="input-group">
                            <b-form-input type="text" placeholder="Introduzca el texto"></b-form-input>
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary pb-1" type="button">
                                        <i class="fa fa-search" aria-hidden="true"></i> 
                                    </button>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                <hr width=610 color=#F7D358>
                </div>
                <div class="row">
                    <table class="table table-bordered table-striped table-responsive-sm">
                        <thead class="table-dark">
                            <tr>
                                <th>Pedido</th>
                                <th>Fecha de documento</th>
                                <th>Condicion de pago</th>
                                <th>Monto total del pedido</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="text-center">
                        <button type="button"  class="btn btn-warning btn-fill float-right btn-sm">
                            ACEPTAR
                        </button>
                </div>
            </card>
        </form>
    </card>
</template>
<style>

</style>