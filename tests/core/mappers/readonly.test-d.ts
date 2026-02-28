import { describe, test, expectTypeOf } from 'vitest';

import type { ReadonlyDeep } from '@/core';

describe('Mappers -> Readonly', () => {
  test('should return the type with all properties recursive', () => {
    type User = {
      name: string;
      age: number;
      surname: string;
      friends: User[];
    };
    
    type ReadonlyUser = {
      readonly name: string;
      readonly age: number;
      readonly surname: string;
      readonly friends: readonly ReadonlyUser[];
    };

    type Result = ReadonlyDeep<User>;
    
    expectTypeOf<Result>().toEqualTypeOf<ReadonlyUser>();
  });
}); 