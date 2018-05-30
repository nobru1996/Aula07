
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AbrirChamadosPage } from '../pages/abrir-chamados/abrir-chamados';
import { FecharChamadoPage } from '../pages/fechar-chamado/fechar-chamado';
import { ConsultarChamadosPage } from '../pages/consultar-chamados/consultar-chamados';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from "@angular/http";
import { FilaProvider } from '../providers/fila/fila';
import { ChamadoProvider } from '../providers/chamado/chamado'; 
import { DatabaseProvider } from '../providers/database/database';
import { SQLite } from '@ionic-native/sqlite';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyApp,
    AbrirChamadosPage,
    FecharChamadoPage,
    ConsultarChamadosPage,
    TabsPage,
    HttpModule

  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AbrirChamadosPage,
    FecharChamadoPage,
    ConsultarChamadosPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    DatabaseProvider,
    FilaProvider,
    ChamadoProvider
    
  ]
})
export class AppModule {}
