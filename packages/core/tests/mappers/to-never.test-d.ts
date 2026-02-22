import { describe, test, expectTypeOf} from 'vitest';

import type { ToNever } from '../../src';

describe("Transformers -> ToNever", () => {
    test('should return never if the type is not never', () => {
        type Name = ToNever<string>;

        expectTypeOf<Name>().toEqualTypeOf<never>();
    });
    
    test('should return the type itself if the type is never', () => {
        type Name = ToNever<never>;

        expectTypeOf<Name>().toEqualTypeOf<never>();
    });
})  