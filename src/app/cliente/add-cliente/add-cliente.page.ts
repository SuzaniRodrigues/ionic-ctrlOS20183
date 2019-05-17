import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.page.html',
  styleUrls: ['./add-cliente.page.scss'],
})
export class AddClientePage implements OnInit {

  private cliente: Cliente;

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.cliente = new Cliente;
  }

  onSubmit(form) {
    this.clienteService.save(this.cliente)
      .then(
          res=>{
            console.log("cadastrado");
          },
          err=>{
            console.log("Erro ao cadastrar!" + err);
          }
      );
  }

}
