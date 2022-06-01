//import axios from 'axios';
import http from '../services/httpConfig';

//const API_URL = 'http://localhost:3000/api';

class mercanciaService {
    
    newMercancia(data){
        return http.post('/mercancia/new', data);
    }

    getMercancia() {
        return http.get('/mercancia/all');    
    }

    getMercanciaId(id){
        return http.get(`/${id}`)
    }

    getMercanciaUpdate(id,data){
        return http.put(`edit/${id}`,data)
    }

    getMercanciaDelete(id){
        return http.delete(`delete/${id}`)
    }
}

export default new mercanciaService();