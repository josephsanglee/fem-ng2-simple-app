import {
  describe,
  expect,
  it,
} from '@angular/testing';

import {Users} from './users.component';

describe('Users Component', () => {
  it('should be named `UsersComponent`', () => {
    expect(Users.name).toBe('Users');
  });
});
