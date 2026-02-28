import { describe, test, expectTypeOf } from 'vitest';

import type { ValueOf } from '@/core';

describe('Extractors -> ValueOf', () => {
  test('should return the values of an object', () => {
    type Result = ValueOf<{ name: string, age: number }>;
    expectTypeOf<Result>().toEqualTypeOf<string | number>();
  });

  test('should return never if the type is not an object', () => {
    type Result = ValueOf<string>;
    expectTypeOf<Result>().toEqualTypeOf<never>();
  });
}); 