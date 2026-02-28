import { expectTypeOf, describe, test } from 'vitest'

import type { IsAny, IsUnknown, IsUnion } from '@/core';

describe('IsAny', () => {
  test('should return true if the type is any', () => {
    type Result = IsAny<any>;
    expectTypeOf<Result>().toEqualTypeOf<true>();
  });

  test('should return false if the type is not any', () => {
    expectTypeOf<IsAny<string>>().toEqualTypeOf<false>();
    expectTypeOf<IsAny<number>>().toEqualTypeOf<false>();
    expectTypeOf<IsAny<boolean>>().toEqualTypeOf<false>();
    expectTypeOf<IsAny<null>>().toEqualTypeOf<false>();
    expectTypeOf<IsAny<undefined>>().toEqualTypeOf<false>();
    expectTypeOf<IsAny<void>>().toEqualTypeOf<false>();
    expectTypeOf<IsAny<never>>().toEqualTypeOf<false>();
    expectTypeOf<IsAny<object>>().toEqualTypeOf<false>();
    expectTypeOf<IsAny<Function>>().toEqualTypeOf<false>();
    expectTypeOf<IsAny<symbol>>().toEqualTypeOf<false>();
    expectTypeOf<IsAny<bigint>>().toEqualTypeOf<false>();
    expectTypeOf<IsAny<Array<string>>>().toEqualTypeOf<false>();
    expectTypeOf<IsAny<Record<string, unknown>>>().toEqualTypeOf<false>();
    expectTypeOf<IsAny<Map<string, unknown>>>().toEqualTypeOf<false>();
    expectTypeOf<IsAny<Set<unknown>>>().toEqualTypeOf<false>();
    expectTypeOf<IsAny<WeakMap<object, unknown>>>().toEqualTypeOf<false>();
  });

  test('should return true if the type is a union type', () => {
    type Result = IsUnion<string | number>;
    expectTypeOf<Result>().toEqualTypeOf<true>();
  });

  test('should return false if the type is not a union type', () => {
    expectTypeOf<IsUnion<string>>().toEqualTypeOf<false>();
    expectTypeOf<IsUnion<number>>().toEqualTypeOf<false>();
    expectTypeOf<IsUnion<boolean>>().toEqualTypeOf<false>();
    expectTypeOf<IsUnion<null>>().toEqualTypeOf<false>();
    expectTypeOf<IsUnion<undefined>>().toEqualTypeOf<false>();
    expectTypeOf<IsUnion<void>>().toEqualTypeOf<false>();
    expectTypeOf<IsUnion<never>>().toEqualTypeOf<false>();
    expectTypeOf<IsUnion<object>>().toEqualTypeOf<false>();
    expectTypeOf<IsUnion<any>>().toEqualTypeOf<false>();
    expectTypeOf<IsUnion<Array<string>>>().toEqualTypeOf<false>();
    expectTypeOf<IsUnion<Record<string, unknown>>>().toEqualTypeOf<false>();
    expectTypeOf<IsUnion<Map<string, unknown>>>().toEqualTypeOf<false>();
    expectTypeOf<IsUnion<Set<unknown>>>().toEqualTypeOf<false>();
    expectTypeOf<IsUnion<WeakMap<object, unknown>>>().toEqualTypeOf<false>();
  });
  
  test('should return true if unknown type is passed', () => {
    type Result = IsUnknown<unknown>;
    expectTypeOf<Result>().toEqualTypeOf<true>();
  });

  test('should return false if never type is passed', () => {
    expectTypeOf<IsUnknown<never>>().toEqualTypeOf<false>();
    expectTypeOf<IsUnknown<string>>().toEqualTypeOf<false>();
    expectTypeOf<IsUnknown<number>>().toEqualTypeOf<false>();
    expectTypeOf<IsUnknown<boolean>>().toEqualTypeOf<false>();
    expectTypeOf<IsUnknown<null>>().toEqualTypeOf<false>();
    expectTypeOf<IsUnknown<undefined>>().toEqualTypeOf<false>();
    expectTypeOf<IsUnknown<void>>().toEqualTypeOf<false>();
    expectTypeOf<IsUnknown<never>>().toEqualTypeOf<false>();
    expectTypeOf<IsUnknown<object>>().toEqualTypeOf<false>();
    expectTypeOf<IsUnknown<Function>>().toEqualTypeOf<false>();
  });
});