import { describe, test, expectTypeOf } from 'vitest';

import type { Brand } from '../../src';

describe('Mappers -> Brand', () => {
  test('should return the type with the brand', () => {
    type UserId = Brand<number, 'UserId'>;
    
    type Result = Brand<number, 'UserId'>;
    expectTypeOf<Result>().toEqualTypeOf<UserId>();
  });

  test('should brands work with union types and 2 brands is not assignable', () => {
    type UserId = Brand<number | string, 'UserId'>;
    type Email = Brand<string, 'Email'>;
 
    type Result = Brand<number | string, 'UserId'>;

    expectTypeOf<Result>().toEqualTypeOf<UserId>();

    expectTypeOf<Result>().not.toEqualTypeOf<Email>();
  })
});