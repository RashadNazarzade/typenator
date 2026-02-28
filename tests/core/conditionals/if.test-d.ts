import { expectTypeOf, describe, test } from 'vitest'

import type { If } from '@/core';

describe('If', () => {
  test('should return the Then type if the condition is true', () => {
    type Result = If<true, 'yes', 'no'>;
    expectTypeOf<Result>().toEqualTypeOf<'yes'>();
  });

  test('should return the Else type if the condition is false', () => {
    type Result = If<false, 'yes', 'no'>;
    expectTypeOf<Result>().toEqualTypeOf<'no'>();
  });
});