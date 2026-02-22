import { describe, test, expectTypeOf } from 'vitest';

import type { Mutable, MutableDeep } from '../../src';

describe('Mappers -> Mutable', () => {
  test('should return the type with all properties first layer', () => {
    type User = {
      readonly name: string;
      readonly age: number;
      readonly surname: string;
    };

    type MutableUser = {
      name: string;
      age: number;
      surname: string;
    };

    type Result = Mutable<User>;

    expectTypeOf<Result>().toEqualTypeOf<MutableUser>();
  });

  test('should return the type with all properties recursive', () => {
    type User = {
      readonly name: string;
      readonly age: number;
      readonly surname: string;
      readonly friends: readonly User[];
    };

    type MutableUser = {
      name: string;
      age: number;
      surname: string;
      friends: MutableUser[];
    };

    type Result = MutableDeep<User>;

    expectTypeOf<Result>().toEqualTypeOf<MutableUser>();
  });
});