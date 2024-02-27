import { Component, OnInit } from '@angular/core';
import { Cliente } from '../modelos/cliente';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {
  mensaje = "Hola Mundo"
  clientes: Cliente[] = []
  constructor() { }

  ngOnInit() {
    let item  = new Cliente
    item.id = "A0123"
    item.apellidos = "Mazo Sanchez"
    item.nombres = "Alejandro"
    item.avatar = "https://campusvirtual.univalle.edu.co/moodle/pluginfile.php/2155118/user/icon/mooveuv/f1?rev=11106122"
    item.email = "mazo@univalle.edu.co"
    this.clientes.push(item)
    let item2  = new Cliente
    item2.id = "BA123"
    item2.apellidos = "Perez Sanchez"
    item2.nombres = "Maria Alexandra"
    item2.avatar = "https://campusvirtual.univalle.edu.co/moodle/pluginfile.php/453531/user/icon/mooveuv/f1?rev=9042015"
    item2.email = "amazo@univalle.edu.co"
    this.clientes.push(item2)
  }
  onSubmit(){}


}
