import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from 'src/app/modelos/cliente';

@Component({
  selector: 'app-listar-item',
  templateUrl: './listar-item.component.html',
  styleUrls: ['./listar-item.component.scss'],
})
export class ListarItemComponent  implements OnInit {
  clientes: Cliente[] = []
  cliente: Cliente = new Cliente
  id!: string
  constructor(
    public router: ActivatedRoute
  ) { }

  ngOnInit() {
    const item  = new Cliente
    this.id = this.router.snapshot.params['id']
    item.id = "A0123"
    item.apellidos = "Mazo Sanchez"
    item.nombres = "Alejandro"
    item.avatar = "https://campusvirtual.univalle.edu.co/moodle/pluginfile.php/2155118/user/icon/mooveuv/f1?rev=11106122"
    item.email = "mazo@univalle.edu.co"
    this.clientes.push(item)
    const item2  = new Cliente
    item2.id = "BA123"
    item2.apellidos = "Perez Sanchez"
    item2.nombres = "Maria Alexandra"
    item2.avatar = "https://campusvirtual.univalle.edu.co/moodle/pluginfile.php/453531/user/icon/mooveuv/f1?rev=9042015"
    item2.email = "amazo@univalle.edu.co"
    this.clientes.push(item2)
    this.clientes.forEach(item =>{
      if(item.id===this.id)
       this.cliente = item
    })
  }

}
