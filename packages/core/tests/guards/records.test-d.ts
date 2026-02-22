import { expectTypeOf, describe, test } from 'vitest'

import type { IsRecord } from '../../src';

describe('Records Guards', () => {
  test('should IsRecord return true if the type is a record', () => {
    type Result = IsRecord<Record<string, unknown>>;
    expectTypeOf<Result>().toEqualTypeOf<true>();
  });

  test('should IsRecord return true if the type is recursive record', () => {
    type User = {
      name: string;
      age: number;
      friends: User[];
    };

    type Result = IsRecord<User>;

    expectTypeOf<Result>().toEqualTypeOf<true>();
  });

  test('should return false if the type is not a record', () => {
    expectTypeOf<IsRecord<string>>().toEqualTypeOf<false>();
    expectTypeOf<IsRecord<number>>().toEqualTypeOf<false>();
    expectTypeOf<IsRecord<boolean>>().toEqualTypeOf<false>();
    expectTypeOf<IsRecord<null>>().toEqualTypeOf<false>();
    expectTypeOf<IsRecord<undefined>>().toEqualTypeOf<false>();
    expectTypeOf<IsRecord<void>>().toEqualTypeOf<false>();
    expectTypeOf<IsRecord<never>>().toEqualTypeOf<false>();
    expectTypeOf<IsRecord<object>>().toEqualTypeOf<false>();
    expectTypeOf<IsRecord<Function>>().toEqualTypeOf<false>();
    expectTypeOf<IsRecord<symbol>>().toEqualTypeOf<false>();
    expectTypeOf<IsRecord<bigint>>().toEqualTypeOf<false>();
    expectTypeOf<IsRecord<Array<string>>>().toEqualTypeOf<false>();
    expectTypeOf<IsRecord<Map<string, unknown>>>().toEqualTypeOf<false>();
    expectTypeOf<IsRecord<Set<unknown>>>().toEqualTypeOf<false>();
    expectTypeOf<IsRecord<WeakMap<object, unknown>>>().toEqualTypeOf<false>();
  });
}); 