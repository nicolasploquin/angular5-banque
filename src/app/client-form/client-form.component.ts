import { Component, OnInit } from '@angular/core';
import { Client } from '../model/client';
import { Router } from '@angular/router';
import { ROUTE_LISTE_CLIENTS } from '../app.routes';
import { BanqueHttpService } from '../services/banque-http.service';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {

  private router: Router;
  private dataService: BanqueHttpService;

  client = new Client();

  constructor(dataService: BanqueHttpService, router: Router) {
    this.dataService = dataService;
    this.router = router;
  }

  enregistrerClient() {
    this.dataService.addClient(this.client).subscribe(
      () => this.router.navigate([ROUTE_LISTE_CLIENTS])
    );
  }

  ngOnInit() {

  }

}
