<template>
    <card class="card-border">
        <form action="">
            <card>
                <div class="row">
                    <div class="col-md-6 mr-5">
                    <h5 class="card-title font-weight-bold">ENTRADAS DE MERCANCIA</h5>
                    </div>
                </div>
                <div class="d-flex justify-content-end mt-3 mr-5">
                    <button type="button" class="btn btn-warning btn-fill mr-4 btn-sm">
                        ACTUALIZAR
                    </button>
                    <button type="button" class="btn btn-warning btn-fill  btn-sm">
                        EXPORTAR
                    </button> 
                </div>
                <div class="row">
                <hr width=610 color=#F7D358>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <label for="exampleFormControlSelect1">empresa</label>
                        <b-form-select id="example-input-1" name="pedido" class="form-control">
                        </b-form-select>
                    </div>
                    <div class="col-md-6">
                        <label for="">pedido</label>
                        <b-form-input type="text"></b-form-input>
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
                    <hr width=610 color=#F7D358>
                </div>
                <div class="row">
                    <table class="table table-bordered table-striped table-responsive">
                        <thead class="table-dark">
                            <tr>
                                <th></th>
                                <th>Entrada de mercancía</th>
                                <th>Posicion</th>
                                <th>Material</th>
                                <th>Texto breve</th>
                                <th>Cantidad</th>
                                <th>Moneda</th>
                                <th>Subtotal</th>
                                <th>Monto total</th>
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
                <div class="d-flex justify-content-end mr-5">
                    <button type="button" class="btn btn-warning btn-fill mr-4 btn-sm">
                    ACEPTAR
                    </button>
                    <button type="button" class="btn btn-warning btn-fill  btn-sm">
                    CANCELAR
                    </button> 
                </div>        
            </card>
        </form>
    </card>
</template>