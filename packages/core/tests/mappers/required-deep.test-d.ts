import { describe, test, expectTypeOf } from 'vitest';

import type { RequiredDeep } from '../../src';

describe('Mappers -> RequiredDeep', () => {
  test('should return the type with all properties first layer', () => {
    type User = {
      name?: string;
      age?: number;
      surname?: string;
    };
    
    type RequiredUser = {
      name: string;
      age: number;
      surname: string;
    };

    type Result = RequiredDeep<User>;

    expectTypeOf<Result>().toEqualTypeOf<RequiredUser>();
  });

  test('should return the type with all properties recursive for arrays', () => {
    type User = {
      name: string;
      age: number;
      surname: string;
      friends: User[];
    };

    type PartialUser = {
      name?: string;
      age?: number;
      surname?: string;
      friends?: (PartialUser | undefined)[];
    };

    type Result = RequiredDeep<PartialUser>;

    expectTypeOf<Result>().toEqualTypeOf<User>();
  });


  test("should return the type with all properties recursive", () => {
    type User = {
      name: string;
      age: number;
      surname: string;
      location: {
        city: string;
        country: string;
        coordinates: {
          latitude: number;
          longitude: number;
        };
        timezone: string;
        father: {
          name: string;
          age: number;

          mother: {
            name: string;
            age: number;
          };
        };
      };
    };

    type PartialUser = {
      name?: string;
      age?: number;
      surname?: string;
      location?: {
        city?: string;
        country?: string;
        coordinates?: {
          latitude?: number;
          longitude?: number;
        };
        timezone?: string;
        father?: {
          name?: string;
          age?: number;

          mother?: {
            name?: string;
            age?: number;
          };
        };
      };
    };

    type Result = RequiredDeep<PartialUser>;

    expectTypeOf<Result>().toEqualTypeOf<User>();
  });

  test('should return the type with all properties recursive for tuples', () => {
    type User = {
      name: string;
      age: number;
      surname: string;
    };

    type PartialUser = {
      name?: string;
      age?: number;
      surname?: string;
    };

    type Arr = [string, number, User];
    type PartialArr = [(string | undefined)?, (number | undefined)?, (PartialUser | undefined)?];

    type Result = RequiredDeep<PartialArr>;
    expectTypeOf<Result>().toEqualTypeOf<Arr>();
  });

  test('should return the type with all properties recursive for arrays', () => {
    type Arr = string[]
    type PartialArr = (string | undefined)[];

    type Result = RequiredDeep<PartialArr>;
    expectTypeOf<Result>().toEqualTypeOf<Arr>();
  });
});