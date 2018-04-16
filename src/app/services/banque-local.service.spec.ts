import { TestBed, inject } from '@angular/core/testing';

import { BanqueLocalService } from './banque-local.service';
import { Client } from '../model/client';

describe('BanqueLocalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BanqueLocalService]
    });
  });
  it('should be created', inject([BanqueLocalService], (service: BanqueLocalService) => {
    expect(service).toBeTruthy();
  }));
  it("ajout d'un client", inject([BanqueLocalService], (service: BanqueLocalService) => {
    let clients = service.getClients();
    let nb = clients.length;
    service.addClient(new Client());
    clients = service.getClients();
    nb++;
    expect(nb === clients.length).toBeTruthy({
      message: "le nombre de clients est resté identique après l'ajout",
      liste: clients
    });
  }));

  it("liste des client", inject([BanqueLocalService], (service: BanqueLocalService) => {
    const clients = service.getClients();
    expect(clients.length > 0).toBeTruthy();
  }));

  it("creation d'un client", inject([BanqueLocalService], (service: BanqueLocalService) => {
    const client = new Client();
    client.nom = "abc";
    client.prenom = "efgh";
    expect(client).toBeTruthy();
    expect(client instanceof Client).toBeTruthy();
  }));



});
