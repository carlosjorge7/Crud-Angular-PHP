import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrosService {

  API = 'http://localhost/api-registros';

  constructor(public http: HttpClient) { }

  getAllRegistros() {
    return this.http.get(`${this.API}/a_registro_list.php`);
  }

  createRegistro(registro) {
    return this.http.post(`${this.API}/a_registro_add.php`, JSON.stringify(registro));
  }

  deleteRegistro(idRegistro: number | string) {
    return this.http.get(`${this.API}/a_registro_delete.php?idRegistro=${idRegistro}`);
  }

  getRegistro(idRegistro: number | string) {
    return this.http.get(`${this.API}/a_registro_list_one.php?idRegistro=${idRegistro}`);
  }

  updateRegistro(registro) {
    return this.http.post(`${this.API}/a_registro_update.php`, JSON.stringify(registro));
  }

}
