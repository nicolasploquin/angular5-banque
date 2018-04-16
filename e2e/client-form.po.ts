import { browser, by, element } from 'protractor';

export class ClientFormPage {
  navigateTo() {
    return browser.get('/client/form');
  }

  getInputNomLabel() {
    return element(by.css('form label[for="champ-nom"]')).getText();
  }
}
