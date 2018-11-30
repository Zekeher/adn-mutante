import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private appService: AppService) { }
  public listAdn;
  public error;
  // Vamos a llamar a nuestro Servicio para obtener la lista de ADN que tenemos registrados.
  ngOnInit() {
    this.appService.getListAdn().subscribe((data) => {
      this.listAdn = data.dna;
    }, (err) => {
      this.error = err;
    });
  }

}
