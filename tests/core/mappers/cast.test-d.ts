import { describe, test, expectTypeOf} from 'vitest';

import type { Cast } from '@/core';

describe("Transformers -> Cast", () => {
    test('should return the same type if the type extends the other type', () => {
        type Name = Cast<"Someone", string>;

        expectTypeOf<Name>().toEqualTypeOf<"Someone">();
    });

    test('should return the other type if the type does not extend the other type', () => {
        type Name = Cast<"Someone", number>;

        expectTypeOf<Name>().toEqualTypeOf<number>();
    });

    test('should return never if the type is not a union type', () => {
        type Name = Cast<"Someone", string | number>;

        expectTypeOf<Name>().toEqualTypeOf<"Someone">();
    });
})