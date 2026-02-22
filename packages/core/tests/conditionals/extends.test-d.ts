import { expectTypeOf, describe, test } from 'vitest'

import type { Extends } from '../../src';

describe('Extends', () => {
  test('should return true if the type extends the other type', () => {
    type Name = 'John';
    type Surname = "John";

    type Result = Extends<Name, Surname>;

    expectTypeOf<Result>().toEqualTypeOf<true>()
  });

  test('should return false if the type does not extend the other type', () => {
    type Name = 'John';
    type Surname = "Johnson";

    type Result = Extends<Name, Surname>;

    expectTypeOf<Result>().toEqualTypeOf<false>()
  });
  
  test('should return true if the type extends the other type', () => {
    type Name = string;
    type Age = number;

    type Result = Extends<Name, Age>;

    expectTypeOf<Result>().toEqualTypeOf<false>()
  });

  test('should return true for Objects with the same properties', () => {
    type User = {
      name: string;
      age: number;
    };

    type User2 = {
      name: string;
      age: number;
    };

    expectTypeOf<Extends<User, User2>>().toEqualTypeOf<true>()
  });

  test('should return false for Objects with different properties', () => {
    type User = {
      name: string;
      age: number;
    };

    type User2 = {
      name: string;
      age: number;
      city: string;
    };

    expectTypeOf<Extends<User, User2>>().toEqualTypeOf<false>()
  });

  test('should work union types', () => {
    expectTypeOf<Extends<string, string | number>>().toEqualTypeOf<true>();
    expectTypeOf<Extends<'jhon', 'wilson' | 'johnson'  | 'jhon'>>().toEqualTypeOf<true>();
  });
});