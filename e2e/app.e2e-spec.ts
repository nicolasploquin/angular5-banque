import { AppPage } from './app.po';
import { ClientFormPage } from './client-form.po';

describe('angular5-banque App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Ma Banque');
  });
});
describe('Crééer Client Form', () => {
  let page: ClientFormPage;

  beforeEach(() => {
    page = new ClientFormPage();
  });

  it('doit afficher le label "Nom"', () => {
    page.navigateTo();
    expect(page.getInputNomLabel()).toEqual('Nom');
  });
});
