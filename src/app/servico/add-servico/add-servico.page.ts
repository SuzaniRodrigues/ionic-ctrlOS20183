import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Servico } from '../servico';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-servico',
  templateUrl: './add-servico.page.html',
  styleUrls: ['./add-servico.page.scss'],
})
export class AddServicoPage implements OnInit {

  private servico: Servico;

  constructor(
    private servicoService: ServicoService,
    public alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.servico = new Servico;
  }

  onSubmit(form) {
    this.servicoService.save(this.servico)
      .then(
        res => {
          this.presentAlert("Aviso", this.servico.descricao + ". Já ta salvo!");
          form.reset();
          this.servico = new Servico;
          this.router.navigate(['tabs/tab3']);
        },
        err => {
          this.presentAlert("Erro!!!", "Ops!! Deu erro!" + err);
        }
      );
  }

  //Alertas ----------------------------------------------
  async presentAlert(titulo: string, texto: string) {
    const alert = await this.alertController.create({
      header: titulo,
      //subHeader: 'Subtitle',
      message: texto,
      buttons: ['OK']
    });

    await alert.present();
  }

}
