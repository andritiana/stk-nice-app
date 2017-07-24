import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { StkNiceAppAppComponent } from '../app/stk-nice-app.component';

beforeEachProviders(() => [StkNiceAppAppComponent]);

describe('App: StkNiceApp', () => {
  it('should create the app',
      inject([StkNiceAppAppComponent], (app: StkNiceAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'stk-nice-app works!\'',
      inject([StkNiceAppAppComponent], (app: StkNiceAppAppComponent) => {
    expect(app.title).toEqual('stk-nice-app works!');
  }));
});
