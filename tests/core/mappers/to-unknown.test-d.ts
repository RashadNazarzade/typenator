import { describe, test, expectTypeOf} from 'vitest';

import type { ToUnknown } from '@/core';

describe("Transformers -> ToUnknown", () => {
    test('should return unknown if the type is not unknown', () => {
        type Type = ToUnknown<string>;

        expectTypeOf<Type>().toEqualTypeOf<unknown>();
    });

    test('should return the type itself if the type is unknown', () => {
        type Type = ToUnknown<unknown>;

        expectTypeOf<Type>().toEqualTypeOf<unknown>();
    });

    test('should return unknown for all edge cases', () => {
        type Type = ToUnknown<never>;
        expectTypeOf<Type>().toEqualTypeOf<unknown>();

        type Type2 = ToUnknown<unknown>;
        expectTypeOf<Type2>().toEqualTypeOf<unknown>();

        type Type3 = ToUnknown<void>;
        expectTypeOf<Type3>().toEqualTypeOf<unknown>();

        type Type5 = ToUnknown<object>;
        expectTypeOf<Type5>().toEqualTypeOf<unknown>();

        type Type6 = ToUnknown<Function>;
        expectTypeOf<Type6>().toEqualTypeOf<unknown>();
    });
})