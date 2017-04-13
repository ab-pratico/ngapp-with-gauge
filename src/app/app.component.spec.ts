import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from 'app/app.component';
import { runUnitTests, runIntegrationTests } from '../../test/testing-helper';

describe('AppComponent', () => {

  describe('UnitTests', runUnitTests(() => {
    for (let i = 0; i < 5; i++) {

      it(`should have as title 'app works!' without render component`, () => {
        const app = new AppComponent();
        expect(app.title).toEqual('app works!');
      });
    }
  }));

  describe('IntegrationTests', runIntegrationTests(() => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent
        ],
      }).compileComponents();
    }));


    it(`should have as title 'app works!'`, async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('app works!');
    }));

  }));

});
