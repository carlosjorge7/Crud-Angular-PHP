import { Component, OnInit } from '@angular/core';
import { RegistrosService } from '../../../servicios/registros.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registros-add',
  templateUrl: './registros-add.component.html',
  styleUrls: ['./registros-add.component.css']
})
export class RegistrosAddComponent implements OnInit {

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

  }

  public createRegistro() {
    this.registroService.createRegistro(this.reg)
      .subscribe(res => {
        if(res['resultado'] == 'OK') {
          console.log(res['resultado']);
        }
    });
    this.router.navigate(['/registros']);
  }

}
