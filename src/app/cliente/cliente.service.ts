import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list("clientes").valueChanges();
  }

  save(cliente: Cliente) {
    return this.db.list("clientes").push(cliente);
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
