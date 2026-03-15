import { describe, test, expectTypeOf } from 'vitest';

import type { KeysOf, RequiredKeys, OptionalKeys } from '@/core';

describe('Extractors -> KeysOf', () => {
  test('should return the keys of an object', () => {
    type Result = KeysOf<{ name: string, age: number }>;
    expectTypeOf<Result>().toEqualTypeOf<'name' | 'age'>();
  });

  test('should return never if the type is not an object', () => {
    type Result = KeysOf<string>;
    expectTypeOf<Result>().toEqualTypeOf<never>();
  });

});


describe('Extractors -> RequiredKeys', () => {
  test('should return only required keys from a mixed object', () => {
    type Result = RequiredKeys<{ name: string; age: number; surname?: string; mother?: string }>;
    expectTypeOf<Result>().toEqualTypeOf<'name' | 'age'>();
  });

  test('should return all keys when all properties are required', () => {
    type Result = RequiredKeys<{ name: string; age: number }>;
    expectTypeOf<Result>().toEqualTypeOf<'name' | 'age'>();
  });

  test('should return never when all properties are optional', () => {
    type Result = RequiredKeys<{ name?: string; age?: number }>;
    expectTypeOf<Result>().toEqualTypeOf<never>();
  });

  test('should return never for an empty object', () => {
    type Result = RequiredKeys<{}>;
    expectTypeOf<Result>().toEqualTypeOf<never>();
  });

  test('should handle a single required key', () => {
    type Result = RequiredKeys<{ id: number; label?: string }>;
    expectTypeOf<Result>().toEqualTypeOf<'id'>();
  });
});




describe('Extractors -> OptionalKeys', () => {
  test('should return only optional keys from a mixed object', () => {
    type Result = OptionalKeys<{ name: string; age: number; surname?: string; mother?: string }>;
    expectTypeOf<Result>().toEqualTypeOf<'surname' | 'mother'>();
  });

  test('should return all keys when all properties are optional', () => {
    type Result = OptionalKeys<{ name?: string; age?: number }>;
    expectTypeOf<Result>().toEqualTypeOf<'name' | 'age'>();
  });

  test('should return never when all properties are required', () => {
    type Result = OptionalKeys<{ name: string; age: number }>;
    expectTypeOf<Result>().toEqualTypeOf<never>();
  });

  test('should return never for an empty object', () => {
    type Result = OptionalKeys<{}>;
    expectTypeOf<Result>().toEqualTypeOf<never>();
  });

  test('should handle a single optional key', () => {
    type Result = OptionalKeys<{ id: number; label?: string }>;
    expectTypeOf<Result>().toEqualTypeOf<'label'>();
  });
});