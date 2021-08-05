import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = [];

  destino: number | undefined;
  valor: number | undefined;


  transferir($event: any) {
    console.log($event);
    this.transferencias.push($event);

  }
}
