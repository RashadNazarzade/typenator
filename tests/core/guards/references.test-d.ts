import { describe, test, expectTypeOf } from 'vitest';

import type { IsFunction, IsPromise } from '@/core';

describe('Guards -> IsFunction', () => {
  test('should return true for a no-arg void function', () => {
    expectTypeOf<IsFunction<() => void>>().toEqualTypeOf<true>();
  });

  test('should return true for a function with a return value', () => {
    expectTypeOf<IsFunction<() => string>>().toEqualTypeOf<true>();
  });

  test('should return true for a function with parameters', () => {
    expectTypeOf<IsFunction<(x: number, y: string) => boolean>>().toEqualTypeOf<true>();
  });

  test('should return true for a function with rest parameters', () => {
    expectTypeOf<IsFunction<(...args: string[]) => void>>().toEqualTypeOf<true>();
  });

  test('should return true for a generic function', () => {
    expectTypeOf<IsFunction<<T>(x: T) => T>>().toEqualTypeOf<true>();
  });

  test('should return true for the Function type', () => {
    expectTypeOf<IsFunction<Function>>().toEqualTypeOf<false>();
  });

  test('should return false for string', () => {
    expectTypeOf<IsFunction<string>>().toEqualTypeOf<false>();
  });

  test('should return false for number', () => {
    expectTypeOf<IsFunction<number>>().toEqualTypeOf<false>();
  });

  test('should return false for boolean', () => {
    expectTypeOf<IsFunction<boolean>>().toEqualTypeOf<false>();
  });

  test('should return false for null', () => {
    expectTypeOf<IsFunction<null>>().toEqualTypeOf<false>();
  });

  test('should return false for undefined', () => {
    expectTypeOf<IsFunction<undefined>>().toEqualTypeOf<false>();
  });

  test('should return false for symbol', () => {
    expectTypeOf<IsFunction<symbol>>().toEqualTypeOf<false>();
  });

  test('should return false for bigint', () => {
    expectTypeOf<IsFunction<bigint>>().toEqualTypeOf<false>();
  });

  test('should return false for a plain object', () => {
    expectTypeOf<IsFunction<{ name: string }>>().toEqualTypeOf<false>();
  });

  test('should return false for an array', () => {
    expectTypeOf<IsFunction<string[]>>().toEqualTypeOf<false>();
  });

  test('should return false for a Promise', () => {
    expectTypeOf<IsFunction<Promise<string>>>().toEqualTypeOf<false>();
  });
});

describe('Guards -> IsPromise', () => {
  test('should return true for Promise<string>', () => {
    expectTypeOf<IsPromise<Promise<string>>>().toEqualTypeOf<true>();
  });

  test('should return true for Promise<number>', () => {
    expectTypeOf<IsPromise<Promise<number>>>().toEqualTypeOf<true>();
  });

  test('should return true for Promise<void>', () => {
    expectTypeOf<IsPromise<Promise<void>>>().toEqualTypeOf<true>();
  });

  test('should return true for Promise<unknown>', () => {
    expectTypeOf<IsPromise<Promise<unknown>>>().toEqualTypeOf<true>();
  });

  test('should return true for a nested Promise', () => {
    expectTypeOf<IsPromise<Promise<Promise<string>>>>().toEqualTypeOf<true>();
  });

  test('should return false for string', () => {
    expectTypeOf<IsPromise<string>>().toEqualTypeOf<false>();
  });

  test('should return false for number', () => {
    expectTypeOf<IsPromise<number>>().toEqualTypeOf<false>();
  });

  test('should return false for boolean', () => {
    expectTypeOf<IsPromise<boolean>>().toEqualTypeOf<false>();
  });

  test('should return false for null', () => {
    expectTypeOf<IsPromise<null>>().toEqualTypeOf<false>();
  });

  test('should return false for undefined', () => {
    expectTypeOf<IsPromise<undefined>>().toEqualTypeOf<false>();
  });

  test('should return false for a plain object', () => {
    expectTypeOf<IsPromise<{ name: string }>>().toEqualTypeOf<false>();
  });

  test('should return false for a function', () => {
    expectTypeOf<IsPromise<() => string>>().toEqualTypeOf<false>();
  });

  test('should return false for an array', () => {
    expectTypeOf<IsPromise<string[]>>().toEqualTypeOf<false>();
  });
});
