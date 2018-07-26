import { AppPage } from './app.po';

describe('ponyracer App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Ponyracer');
    expect(page.getParagraphText()).toEqual('Always a pleasure to bet on ponies');
  });
});
