//import axios from 'axios';
import http from '../services/httpConfig';
//const API_URL = 'http://localhost:3000/api';

class proveedorService {

    getProveedor(){
        return http.get('/proveedores/');
    }

    getProveedorId(id){
        return http.get(`/proveedores/${id}`);
    }

    getProveedorUpdate(id,data){
        return http.put(`/proveedores/${id}`,data);
    }

    getProveedorDelete(id){
        return http.delete(`/proveedores/${id}`);
    }
}

export default new proveedorService();