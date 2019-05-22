import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Cliente } from '../cliente';
import { ClienteService } from '../cliente.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './add-cliente.page.html',
  styleUrls: ['./add-cliente.page.scss'],
})
export class AddClientePage implements OnInit {

  private cliente: Cliente;

  constructor(
    private clienteService: ClienteService,
    public alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.cliente = new Cliente;
  }

  onSubmit(form) {
    this.clienteService.save(this.cliente)
      .then(
        res => {
          this.presentAlert("Aviso", this.cliente.nome + ". Já ta salvo!");
          form.reset();
          this.cliente = new Cliente;
          this.router.navigate(['tabs/tab2']);
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
