import { CiEmergenciasApiPage } from './app.po';

describe('ci-emergencias-api App', function() {
  let page: CiEmergenciasApiPage;

  beforeEach(() => {
    page = new CiEmergenciasApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
