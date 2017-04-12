import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  it(`should have as title 'app works!' without render component`, () => {
    let app = new AppComponent();
    expect(app.title).toEqual('app works!');
  });
  if (!process.env.UNIT_TEST) {

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent
        ],
      }).compileComponents();
    }));

    // it('should create the app', async(() => {
    //   const fixture = TestBed.createComponent(AppComponent);
    //   const app = fixture.debugElement.componentInstance;
    //   expect(app).toBeTruthy();
    // }));


    //for (let i = 0; i < 200; i++) {


    it(`should have as title 'app works!'`, async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('app works 2!');
    }));

    // it(`should have as title 'app works!'`, async(() => {
    //   let app = new AppComponent();
    //   expect(app.title).toEqual('app works!');
    // }));
    //}

    // it('should render title in a h1 tag', async(() => {
    //   const fixture = TestBed.createComponent(AppComponent);
    //   fixture.detectChanges();
    //   const compiled = fixture.debugElement.nativeElement;
    //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
    // }));
    //}

  }
});
