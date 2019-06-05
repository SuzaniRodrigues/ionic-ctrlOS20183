import { Component, OnInit } from '@angular/core';
import {ServicoService} from '../servico.service';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-servico',
  templateUrl: './list-servico.page.html',
  styleUrls: ['./list-servico.page.scss'],
})
export class ListServicoPage implements OnInit {
  private servicos$: Observable<any[]>;

  constructor(
    private servicoService: ServicoService,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() { 
    this.servicos$ = this.servicoService.getAll();
  }

  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }
  async remove(key){
    const alert = await this.alertController.create({
      header: 'Confirme!',
      message: 'Deseja apagar o registro',
      buttons: [
        {
         text: 'não',
         role: 'cancel',
         cssClass: 'secondary',
         handler: (blah) =>{
           console.log('Confirm Cancel: blah');
         } 
        },{
          text: 'sim',
          handler: () => {
            this.servicoService.remover(key);
          }
        }
      ]
    });
    await alert.present();
  }
  edit(key){
    this.router.navigate(['/tabs/addServico', key]);
}
}

