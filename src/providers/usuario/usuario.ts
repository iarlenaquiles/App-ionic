import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the UsuarioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsuarioProvider {

  public urlUsuario = "http://localhost:8000/usuario";

  constructor(public http: HttpClient) {
    console.log('Hello UsuarioProvider Provider');
  }
  public findAll(): Observable<any> {
    return this.http.get(this.urlUsuario);
  }

  public salvar(usuario): Observable<any> {
    return this.http.post(this.urlUsuario, usuario);
  }

  public editar(usuario): Observable<any> {
    return this.http.put(this.urlUsuario + "/" + usuario._id, usuario);
  }

  public deletar(id) {
    this.http.delete(this.urlUsuario + "/" + id);
  }
}
