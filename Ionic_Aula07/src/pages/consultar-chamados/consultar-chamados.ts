import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { fila } from '../../entity/fila';

/**
 * Generated class for the ConsultarChamadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-consultar-chamados',
  templateUrl: 'consultar-chamados.html',
})
export class ConsultarChamadosPage {
  public fila : fila [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    var l1 = {nome_fila:'Fila1'};     
    var l2 = {nome_fila:'Fila2'};     
    
     this.fila = [l1, l2];  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConsultarChamadosPage');
  }

}
