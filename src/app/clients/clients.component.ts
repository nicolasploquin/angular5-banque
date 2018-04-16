import { Component, OnInit } from '@angular/core';
import { BanqueHttpService } from '../services/banque-http.service';
import {Client} from '../model/client';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  private dataService: BanqueHttpService;

  clients: Client[];

  constructor(dataService: BanqueHttpService) {
    this.dataService = dataService;
  }

  ngOnInit() {
    // this.clients = this.dataService.getClients();
    this.dataService.getClients()
      .subscribe(
        data => this.clients = data,
        error => {
          console.error('Impossible de récupérer la liste des clients');
          console.dir(error);
        }
      );

  }

}
