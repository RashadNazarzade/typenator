import { expectTypeOf, describe, test } from 'vitest'

import type { Equals } from '@/core';

describe('Equals', () => {
  test('should return true if the types are exactly equal', () => {
   type Name = 'John';
   type Surname = "John";

   type Result = Equals<Name, Surname>;

   expectTypeOf<Result>().toEqualTypeOf<true>()
  });

  test('should return false when types are not equals', () => {
    type Name = 'John';
    type Surname = "Johnson";

    type Result = Equals<Name, Surname>;

    expectTypeOf<Result>().toEqualTypeOf<false>()
  });

  test('should return true when types are the same identity', () => {
    type Name = 'John';
    type Name2 = Name;

    type Result = Equals<Name, Name2>;

    expectTypeOf<Result>().toEqualTypeOf<true>()
  });
  
  test('should return false when types are not the same identity', () => {
    type Name = string;
    type Age = number;

    type Result = Equals<Name, Age>;

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

    expectTypeOf<Equals<User, User2>>().toEqualTypeOf<true>()
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

    expectTypeOf<Equals<User, User2>>().toEqualTypeOf<false>()
  });


  test('should return true for Arrays with the same items', () => {
    type Numbers = [1, 2, 3];
    type Numbers2 = [1, 2, 3];

    expectTypeOf<Equals<Numbers, Numbers2>>().toEqualTypeOf<true>()
  });

  test('should return false for Arrays with different items', () => {
    type Numbers = [1, 2, 3];
    type Numbers2 = [1, 2, 4];

    expectTypeOf<Equals<Numbers, Numbers2>>().toEqualTypeOf<false>()
  });

  test('should return true for Tuples with the same items', () => {
    type User = { name: string, age: number };

    type Numbers = [string, number, User];
    type Numbers2 = [string, number, User,];

    expectTypeOf<Equals<Numbers, Numbers2>>().toEqualTypeOf<true>()
  });

  test('should return true for recursive types', () => {
    type User = { name: string, age: number, friends: User[] };
    type User2 = { name: string, age: number, friends: User2[] };

    expectTypeOf<Equals<User, User2>>().toEqualTypeOf<true>();
  });
})