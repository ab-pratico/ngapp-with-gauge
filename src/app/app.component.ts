import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

declare var require;

@Component({
  selector: 'app-root',
  template: require('./app.component.html')
})
export class AppComponent implements OnInit {
  title = 'app works!';
  observable: Observable<any>;
  observer: Observer<any>;
  ngOnInit() {
    // this.observable = Observable.of(1).delay(4000);
    this.observable = new Observable((observer) => {
      this.observer = observer;
    });
  }

  complete() {
    this.observer.complete();
  }

  error() {
    this.observer.error(new Error('Erro durante a execução'));
  }
  subscribe() {
    this.observable.subscribe(() => {
      alert('COMPLETOU');
    }, (e) => {
      alert(e.message);
    });
  }
}
