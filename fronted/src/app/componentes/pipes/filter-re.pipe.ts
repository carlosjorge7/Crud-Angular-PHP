import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRe'
})
export class FilterRePipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultRegistros = [];
    for(var reg of value){
      if(reg.codigo.toLowerCase().indexOf(arg) > -1 ||
        reg.codigo.indexOf(arg) > -1 ||
        reg.nombre.toLowerCase().indexOf(arg) > -1 ||
        reg.nombre.indexOf(arg) > -1 ||
        reg.direccion.toLowerCase().indexOf(arg) > -1 ||
        reg.direccion.indexOf(arg) > -1 ||
        reg.poblacion.toLowerCase().indexOf(arg) > -1 ||
        reg.poblacion.indexOf(arg) > -1 ||
        reg.cp.toLowerCase().indexOf(arg) > -1 ||
        reg.cp.indexOf(arg) > -1 ||
        reg.ciudad.toLowerCase().indexOf(arg) > -1 ||
        reg.ciudad.indexOf(arg) > -1 ||
        reg.telefono.toLowerCase().indexOf(arg) > -1 ||
        reg.telefono.indexOf(arg) > -1 ||
        reg.email.toLowerCase().indexOf(arg) > -1 ||
        reg.email.indexOf(arg) > -1){
          resultRegistros.push(reg);
      };
    };
    return resultRegistros;
  }

}
