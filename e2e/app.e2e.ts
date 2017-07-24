import { StkNiceAppPage } from './app.po';

describe('stk-nice-app App', function() {
  let page: StkNiceAppPage;

  beforeEach(() => {
    page = new StkNiceAppPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('stk-nice-app works!');
  });
});
