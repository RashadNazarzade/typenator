import { expectTypeOf, describe, test } from 'vitest'

import type { IsNumber, IsBoolean, IsSymbol, IsBigint, IsNull, IsNever, IsString, IsUndefined } from '@/core';

describe('Primitives Guards', () => {
  test('should IsNumber return true if the type is a number', () => {
    type Result = IsNumber<number>;
    expectTypeOf<Result>().toEqualTypeOf<true>();
  });

  test('should IsNumber return false if the type is not a number', () => {
    expectTypeOf<IsNumber<string>>().toEqualTypeOf<false>();
    expectTypeOf<IsNumber<boolean>>().toEqualTypeOf<false>();
    expectTypeOf<IsNumber<null>>().toEqualTypeOf<false>();
    expectTypeOf<IsNumber<undefined>>().toEqualTypeOf<false>();
    expectTypeOf<IsNumber<void>>().toEqualTypeOf<false>();
    expectTypeOf<IsNumber<never>>().toEqualTypeOf<false>();
    expectTypeOf<IsNumber<object>>().toEqualTypeOf<false>();
    expectTypeOf<IsNumber<Function>>().toEqualTypeOf<false>();
    expectTypeOf<IsNumber<symbol>>().toEqualTypeOf<false>();
    expectTypeOf<IsNumber<bigint>>().toEqualTypeOf<false>();
    expectTypeOf<IsNumber<Array<string>>>().toEqualTypeOf<false>();
    expectTypeOf<IsNumber<Record<string, unknown>>>().toEqualTypeOf<false>();
    expectTypeOf<IsNumber<Map<string, unknown>>>().toEqualTypeOf<false>();
    expectTypeOf<IsNumber<Set<unknown>>>().toEqualTypeOf<false>();
    expectTypeOf<IsNumber<WeakMap<object, unknown>>>().toEqualTypeOf<false>();
  });

  test('should IsBoolean return true if the type is a boolean', () => {
    type Result = IsBoolean<boolean>;
    expectTypeOf<Result>().toEqualTypeOf<true>();
  });

  test('should IsBoolean return false if the type is not a boolean', () => {
    expectTypeOf<IsBoolean<string>>().toEqualTypeOf<false>();
    expectTypeOf<IsBoolean<number>>().toEqualTypeOf<false>();
    expectTypeOf<IsBoolean<null>>().toEqualTypeOf<false>();
    expectTypeOf<IsBoolean<undefined>>().toEqualTypeOf<false>();
    expectTypeOf<IsBoolean<void>>().toEqualTypeOf<false>();
    expectTypeOf<IsBoolean<never>>().toEqualTypeOf<false>();
    expectTypeOf<IsBoolean<object>>().toEqualTypeOf<false>();
    expectTypeOf<IsBoolean<Function>>().toEqualTypeOf<false>();
    expectTypeOf<IsBoolean<symbol>>().toEqualTypeOf<false>();
    expectTypeOf<IsBoolean<bigint>>().toEqualTypeOf<false>();
    expectTypeOf<IsBoolean<Array<string>>>().toEqualTypeOf<false>();
    expectTypeOf<IsBoolean<Record<string, unknown>>>().toEqualTypeOf<false>();
    expectTypeOf<IsBoolean<Map<string, unknown>>>().toEqualTypeOf<false>();
    expectTypeOf<IsBoolean<Set<unknown>>>().toEqualTypeOf<false>();
    expectTypeOf<IsBoolean<WeakMap<object, unknown>>>().toEqualTypeOf<false>();
  });

  test('should IsNever return true if the type is never', () => {
    type Result = IsNever<never>;
    expectTypeOf<Result>().toEqualTypeOf<true>();
  });

  test('should IsNever return false if the type is not never', () => {
    expectTypeOf<IsNever<string>>().toEqualTypeOf<false>();
    expectTypeOf<IsNever<number>>().toEqualTypeOf<false>();
    expectTypeOf<IsNever<boolean>>().toEqualTypeOf<false>();
    expectTypeOf<IsNever<null>>().toEqualTypeOf<false>();
    expectTypeOf<IsNever<undefined>>().toEqualTypeOf<false>();
    expectTypeOf<IsNever<void>>().toEqualTypeOf<false>();
    expectTypeOf<IsNever<object>>().toEqualTypeOf<false>();
    expectTypeOf<IsNever<symbol>>().toEqualTypeOf<false>();
    expectTypeOf<IsNever<bigint>>().toEqualTypeOf<false>();
    expectTypeOf<IsNever<Array<string>>>().toEqualTypeOf<false>();
  });

  test('should IsSymbol return true if the type is a symbol', () => {
    type Result = IsSymbol<symbol>;
    expectTypeOf<Result>().toEqualTypeOf<true>();
  });

  test('should IsSymbol return false if the type is not a symbol', () => {
    expectTypeOf<IsSymbol<string>>().toEqualTypeOf<false>();
    expectTypeOf<IsSymbol<number>>().toEqualTypeOf<false>();
    expectTypeOf<IsSymbol<boolean>>().toEqualTypeOf<false>();
    expectTypeOf<IsSymbol<null>>().toEqualTypeOf<false>();
    expectTypeOf<IsSymbol<undefined>>().toEqualTypeOf<false>();
    expectTypeOf<IsSymbol<void>>().toEqualTypeOf<false>();
    expectTypeOf<IsSymbol<never>>().toEqualTypeOf<false>();
    expectTypeOf<IsSymbol<object>>().toEqualTypeOf<false>();
    expectTypeOf<IsSymbol<bigint>>().toEqualTypeOf<false>();
    expectTypeOf<IsSymbol<Array<string>>>().toEqualTypeOf<false>();
  });

  test('should IsBigint return true if the type is a bigint', () => {
    type Result = IsBigint<bigint>;
    expectTypeOf<Result>().toEqualTypeOf<true>();
  });

  test('should IsBigint return false if the type is not a bigint', () => {
    expectTypeOf<IsBigint<string>>().toEqualTypeOf<false>();
    expectTypeOf<IsBigint<number>>().toEqualTypeOf<false>();
    expectTypeOf<IsBigint<boolean>>().toEqualTypeOf<false>();
    expectTypeOf<IsBigint<null>>().toEqualTypeOf<false>();
    expectTypeOf<IsBigint<undefined>>().toEqualTypeOf<false>();
    expectTypeOf<IsBigint<void>>().toEqualTypeOf<false>();
    expectTypeOf<IsBigint<never>>().toEqualTypeOf<false>();
    expectTypeOf<IsBigint<object>>().toEqualTypeOf<false>();
    expectTypeOf<IsBigint<symbol>>().toEqualTypeOf<false>();
    expectTypeOf<IsBigint<Array<string>>>().toEqualTypeOf<false>();
  });

  test('should IsNull return true if the type is null', () => {
    type Result = IsNull<null>;
    expectTypeOf<Result>().toEqualTypeOf<true>();
  });

  test('should IsNull return false if the type is not null', () => {
    expectTypeOf<IsNull<string>>().toEqualTypeOf<false>();
    expectTypeOf<IsNull<number>>().toEqualTypeOf<false>();
    expectTypeOf<IsNull<boolean>>().toEqualTypeOf<false>();
    expectTypeOf<IsNull<undefined>>().toEqualTypeOf<false>();
    expectTypeOf<IsNull<void>>().toEqualTypeOf<false>();
    expectTypeOf<IsNull<never>>().toEqualTypeOf<false>();
    expectTypeOf<IsNull<object>>().toEqualTypeOf<false>();
    expectTypeOf<IsNull<symbol>>().toEqualTypeOf<false>();
    expectTypeOf<IsNull<bigint>>().toEqualTypeOf<false>();
    expectTypeOf<IsNull<Array<string>>>().toEqualTypeOf<false>();
  });

  test('should IsString return true if the type is a string', () => {
    type Result = IsString<string>;
    expectTypeOf<Result>().toEqualTypeOf<true>();
  });

  test('should IsString return false if the type is not a string', () => {
    expectTypeOf<IsString<number>>().toEqualTypeOf<false>();
    expectTypeOf<IsString<boolean>>().toEqualTypeOf<false>();
    expectTypeOf<IsString<null>>().toEqualTypeOf<false>();
    expectTypeOf<IsString<undefined>>().toEqualTypeOf<false>();
    expectTypeOf<IsString<void>>().toEqualTypeOf<false>();
    expectTypeOf<IsString<never>>().toEqualTypeOf<false>();
    expectTypeOf<IsString<object>>().toEqualTypeOf<false>();
    expectTypeOf<IsString<symbol>>().toEqualTypeOf<false>();
    expectTypeOf<IsString<bigint>>().toEqualTypeOf<false>();
    expectTypeOf<IsString<Array<string>>>().toEqualTypeOf<false>();
    expectTypeOf<IsString<Record<string, unknown>>>().toEqualTypeOf<false>();
    expectTypeOf<IsString<Map<string, unknown>>>().toEqualTypeOf<false>();
    expectTypeOf<IsString<Set<unknown>>>().toEqualTypeOf<false>();
  });

  test('should IsUndefined return true if the type is undefined', () => {
    type Result = IsUndefined<undefined>;
    expectTypeOf<Result>().toEqualTypeOf<true>();
  });

  test('should IsUndefined return false if the type is not undefined', () => {
    expectTypeOf<IsUndefined<string>>().toEqualTypeOf<false>();
    expectTypeOf<IsUndefined<number>>().toEqualTypeOf<false>();
    expectTypeOf<IsUndefined<boolean>>().toEqualTypeOf<false>();
    expectTypeOf<IsUndefined<null>>().toEqualTypeOf<false>();
    expectTypeOf<IsUndefined<void>>().toEqualTypeOf<false>();
    expectTypeOf<IsUndefined<never>>().toEqualTypeOf<false>();
    expectTypeOf<IsUndefined<object>>().toEqualTypeOf<false>();
    expectTypeOf<IsUndefined<symbol>>().toEqualTypeOf<false>();
    expectTypeOf<IsUndefined<bigint>>().toEqualTypeOf<false>();
    expectTypeOf<IsUndefined<Array<string>>>().toEqualTypeOf<false>();
    expectTypeOf<IsUndefined<Record<string, unknown>>>().toEqualTypeOf<false>();
    expectTypeOf<IsUndefined<Map<string, unknown>>>().toEqualTypeOf<false>();
    expectTypeOf<IsUndefined<Set<unknown>>>().toEqualTypeOf<false>();
    expectTypeOf<IsUndefined<WeakMap<object, unknown>>>().toEqualTypeOf<false>();
  });
});