import { AppComGaugePage } from './app.po';

describe('app-com-gauge App', () => {
  let page: AppComGaugePage;

  beforeEach(() => {
    page = new AppComGaugePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
