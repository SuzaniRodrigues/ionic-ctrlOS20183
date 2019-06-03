import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  private cliente: Cliente;

  constructor(
    private clienteService: ClienteService,
    private activeRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.cliente = new Cliente;
    this.clienteService.get(this.activeRouter.snapshot.paramMap.get("id"))
    .subscribe(
      res =>{
        this.cliente=res;
        //if (!this.cliente.foto){
          //this.cliente.foto ="/assets/perfil.lpg";
        //}
      },
      err =>{
        console.log(err)
      }
    );
  }

}
