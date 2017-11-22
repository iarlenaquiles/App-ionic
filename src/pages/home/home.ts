import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [UsuarioProvider]
})
export class HomePage {

  public usuarios = [];
  public usuarioCadastro = {
    "_id": "", "nome": "", idade: null
  };
  constructor(public navCtrl: NavController, private usuarioService: UsuarioProvider) {
    this.getUsuarios();
  }

  public getUsuarios() {
    this.usuarioService.findAll().subscribe(response => this.usuarios = response);
  }

  public salvarUsuario() {
    if (this.usuarioCadastro._id == "") {
      this.usuarioService.salvar(this.usuarioCadastro).subscribe(response => this.getUsuarios());
      this.usuarioCadastro = { "_id": null, "nome": "", idade: null };
    }
  }

  public editarForm(usuario) {
    this.usuarioCadastro = usuario;
  }

}
