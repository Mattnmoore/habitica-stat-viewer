/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {UserData} from './user-data';

describe('UserData', () => {
  it('should create an instance', () => {
    expect(new UserData()).toBeTruthy();
  });
});
