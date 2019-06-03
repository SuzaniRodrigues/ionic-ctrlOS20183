import { Component, OnInit } from '@angular/core';
import { Servico } from '../servico';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  private servico: Servico;

  constructor(
    private servicoService: ServicoService,
    private activeRouter: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.servico = new Servico;
    this.servicoService.get(this.activeRouter.snapshot.paramMap.get("id"))
    .subscribe(
      res =>{
        this.servico=res;
      },
      err =>{
        console.log(err)
      }
    );
  }

}