import { Component, OnInit } from '@angular/core';
import { Cliente } from '../modelos/cliente';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.page.html',
  styleUrls: ['./binding.page.scss'],
})
export class BindingPage implements OnInit {
  cliente = new Cliente
  constructor() { }

  ngOnInit() {
  }

}
