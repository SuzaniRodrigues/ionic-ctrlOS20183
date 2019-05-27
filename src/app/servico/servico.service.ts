import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Servico } from './servico';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list('servicos').snapshotChanges()
    .pipe(
      map(changes =>
        changes.map(c => ({key: c.payload.key, ...c.payload.val() }))
        )
      )
    }
  

  save(servico: Servico) {
    return this.db.list("servicos").push(servico);
  }










  
  // //Local
  // gerarKey() {
  //   for (let i = 0; i < localStorage.length; i++) {
  //     let key = localStorage.key(i);
  //     let value = localStorage.getItem(key);
  //     console.log(key, value);
  //   }
  //   return localStorage.length + 1;
  // }
  // save(cliente: Cliente) {

  //   localStorage.setItem(this.gerarKey().toString(),JSON.stringify(cliente));
  // }
}
