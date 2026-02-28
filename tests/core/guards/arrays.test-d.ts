import { expectTypeOf, describe, test } from 'vitest'

import type { IsArray, IsTuple, IsReadonlyArray } from '@/core';

describe('IsArray', () => {
  test('should return true if the type is an array', () => {
    type Result = IsArray<string[]>;

    expectTypeOf<Result>().toEqualTypeOf<true>();
  });

  test('should return false if the type is not an array', () => {
    type Result = IsArray<string>;

    expectTypeOf<Result>().toEqualTypeOf<false>();
  });

  test('should return true if the type is a tuple', () => {
    type Result = IsTuple<[string, number]>;

    expectTypeOf<Result>().toEqualTypeOf<true>();
  });

  test('should return false if the type is not a tuple', () => {
    type Result = IsTuple<string>;

    expectTypeOf<Result>().toEqualTypeOf<false>();
  });

  test('should IsTuple return true when array type is passed', () => {
    type Result = IsTuple<string[]>;

    expectTypeOf<Result>().toEqualTypeOf<false>();
  });

  test('should IsTuple return true when tuple type is passed', () => {
    type Result = IsTuple<[string, number, string]>;

    expectTypeOf<Result>().toEqualTypeOf<true>();
  });

  test('should IsTuple return false when tuple type is passed', () => {
    type Result = IsTuple<[string, number, string]>;

    expectTypeOf<Result>().toEqualTypeOf<true>();
  });

  test('should IsReadonlyArray return true when readonly array type is passed', () => {
    type Result = IsReadonlyArray<readonly string[]>;

    expectTypeOf<Result>().toEqualTypeOf<true>();
  });

  test('should IsReadonlyArray return false when array type is passed', () => {
    type Result = IsReadonlyArray<string[]>;

    expectTypeOf<Result>().toEqualTypeOf<false>();
  });
});