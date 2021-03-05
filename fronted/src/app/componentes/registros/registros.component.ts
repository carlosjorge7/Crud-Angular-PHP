import { Component, OnInit } from '@angular/core';
import { RegistrosService } from '../../servicios/registros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {

  page: number = 1;

  filterRegistros = '';
  upd: boolean = false;


  registros = null;
  reg = {
    idRegistro: null,
    codigo: null,
    nombre: null,
    direccion: null,
    poblacion: null,
    cp: null,
    telefono: null,
    email : null,
    created_at: null,
    updated_at: null
  }

  constructor(public registroService: RegistrosService,
              public router: Router) { }

  ngOnInit() {
    this.getAllRegistros();
  }

  public getAllRegistros() {
    this.registroService.getAllRegistros()
      .subscribe(res => {
        this.registros = res;
    }); 
  }

  public getRegistro(idRegistro) {
    this.registroService.getRegistro(idRegistro)
      .subscribe(res => {
        console.log(res[0]);
        this.reg = res[0];
        this.upd = true;
    });
  }

  public deleteRegistro(idRegistro) {
    this.registroService.deleteRegistro(idRegistro)
      .subscribe(res => { 
        if(res['resultado'] == 'OK') { 
          this.getAllRegistros();
        }
      });
  }

  public updateRegistro() {
    this.registroService.updateRegistro(this.reg)
      .subscribe(res => { 
        if(res['resultado'] == 'OK') {
          this.router.navigate(['/registros']);
          this.getAllRegistros();
          this.upd = false;
        }
      });
  }

  public nuevoRegistro() {
    this.router.navigate(['/registros/añadir']);
  }

  public hayRegistros() {
    return true;
  } 

}
