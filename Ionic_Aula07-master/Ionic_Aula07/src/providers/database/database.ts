import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  constructor(private db: SQLite) {
  }

  openDatabase() {
    return this.db.create({
      name: "chamados.db",
      location: "default"
    });

  }

  createDatabase (){
    return this.openDatabase ().
    then((db:	SQLiteObject)	=>{
    this.createTabelaChamados(db);
    });
    }
    createTabelaChamados (db:	SQLiteObject){
    let sql:	string =	"CREATE	TABLE	IF	NOT	EXISTS	chamados	(id	INTEGER	PRIMARY	KEY	AUTOINCREMENT,	" +
    "	descricao	VARCHAR	(200),	fila	VARCHAR(200)";
    db.executeSql (sql,	{});//{poderia	conter	parâmetros,	por	isso	o	{}}
    }
}
