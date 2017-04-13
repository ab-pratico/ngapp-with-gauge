// see issue https://github.com/AngularClass/angular2-webpack-starter/issues/709
// import 'core-js/es6/promise';


import 'core-js/es7/reflect';

// won't be necessary after merge this pull request https://github.com/angular/zone.js/pull/711
import './patched-zone';
// import 'zone.js/dist/zone';

import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

import { TestBed } from '@angular/core/testing';

global['preparedTetsts'] = false;


if (!global['preparedTetsts']) {
  //  console.log('PREPARING TESTS................................');
  global['preparedTetsts'] = true;

  beforeEach(() => {
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  });

  afterEach(() => {
    TestBed.resetTestEnvironment();
  });
  // //   afterEach(() => {
  // //     TestBed.resetTestEnvironment();
  // //   });
}
