import { KrypterUiPage } from './app.po';

describe('krypter-ui App', () => {
  let page: KrypterUiPage;

  beforeEach(() => {
    page = new KrypterUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
