import { describe, test, expectTypeOf } from 'vitest';

import type { KeysOf } from '../../src';

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