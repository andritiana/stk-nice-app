export class StkNiceAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('stk-nice-app-app h1')).getText();
  }
}
