<template>
    <card class="card-border">
        <form action="">
            <card>
                <div class="row">
                    <div class="col-md-8">
                    <h5 class="card-title font-weight-bold">RESUMEN DE FACTURAS INGRESADAS</h5>
                    </div>
                    <hr width=760 color=#F7D358>
                </div>
            </card>
            <div class="d-flex justify-content-end mt-2 mr-1">
                <button type="button" class="btn btn-warning btn-fill mr-2 btn-sm">Nota de crédito</button>
                <button type="button" class="btn btn-warning btn-fill mr-2 btn-sm">Actualizar</button>
                <button type="button" class="btn btn-warning btn-fill mr-2 btn-sm">Exportar</button>
            </div>
            <card class="mt-4">
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
                    <hr width=760 color=#F7D358>
                </div>
                <div class="row">
                    <table class="table table-bordered table-striped table-responsive">
                        <thead class="table-dark">
                        <tr> 
                            <th></th>
                            <th>ID</th>
                            <th>RFC</th>
                            <th>Estatus</th>
                            <th>Fecha de pago</th>
                            <th>Serie</th>
                            <th>Folio</th>
                            <th>Referencia</th>
                            <th>Confirmacion Bancaria</th>
                            <th>Fecha de recepción</th>
                            <th>Moneda</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                            <b-form-checkbox id="checkbox-1" name="checkbox-1"></b-form-checkbox> 
                            </td>
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