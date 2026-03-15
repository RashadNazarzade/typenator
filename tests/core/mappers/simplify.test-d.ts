import { describe, test, expectTypeOf } from 'vitest';

import type { Simplify } from '@/core';

describe('Mappers -> Simplify', () => {
  test('should preserve a plain object as-is', () => {
    type Result = Simplify<{ name: string; age: number }>;
    expectTypeOf<Result>().toEqualTypeOf<{ name: string; age: number }>();
  });

  test('should flatten an intersection into a single object', () => {
    type Result = Simplify<{ name: string } & { age: number }>;
    expectTypeOf<Result>().toEqualTypeOf<{ name: string; age: number }>();
  });

  test('should flatten a multi-part intersection', () => {
    type Result = Simplify<{ a: string } & { b: number } & { c: boolean }>;
    expectTypeOf<Result>().toEqualTypeOf<{ a: string; b: number; c: boolean }>();
  });

  test('should preserve optional properties', () => {
    type Result = Simplify<{ name: string; age?: number }>;
    expectTypeOf<Result>().toEqualTypeOf<{ name: string; age?: number }>();
  });

  test('should preserve readonly properties', () => {
    type Result = Simplify<{ readonly id: number; name: string }>;
    expectTypeOf<Result>().toEqualTypeOf<{ readonly id: number; name: string }>();
  });

  test('should preserve nested object types without flattening them deeply', () => {
    type Result = Simplify<{ user: { name: string; age: number } }>;
    expectTypeOf<Result>().toEqualTypeOf<{ user: { name: string; age: number } }>();
  });

  test('should work with an empty object', () => {
    type Result = Simplify<{}>;
    expectTypeOf<Result>().toEqualTypeOf<{}>();
  });
});
