/**
 * Check if type T is any (unsafe type).
 * @template T - The type to check
 * @returns True if T is any, false otherwise
 * @example
 * ```ts
 * type Result = IsAny<any>
 * // true
 * type Result2 = IsAny<string>
 * // false
 * ```
 */
export type IsAny<T> = 0 extends 1 & T ? true : false;

/**
 * Check if type T is unknown.
 * @template T - The type to check
 * @returns True if T is unknown, false otherwise
 * @example
 * ```ts
 * type Result = IsUnknown<unknown>
 * // true
 * type Result2 = IsUnknown<string>
 * // false
 * ```
 */
export type IsUnknown<T> = unknown extends T
  ? T extends unknown
    ? true
    : false
  : false;

/**
 *  Check if generic type T is Union type.
 * @template T - The type to check
 * @returns True if T is a union type, false otherwise
 * @example
 * ```ts
 * type Result = IsUnion<string | number>
 * // true
 * type Result2 = IsUnion<string>
 * // false
 * ```
 *
 * @exception boolean and never are union type but they are not union types in the sense of the type system. That is why i extracted them from the union type check.
 * @example boolean
 * ```ts
 * type Result = IsUnion<boolean>
 * // false
 * ```
 * @example never
 * ```ts
 * type Result = IsUnion<never>
 * // false
 * ```
 */
export type IsUnion<T, U = T> =
  // boolean and never are not union types in the sense of the type system.
  [T] extends [never]
    ? false
    : [T] extends [boolean]
      ? false
      : T extends any
        ? [U] extends [T]
          ? false
          : true
        : false;

/**
 * Check if type T is a Nullable type.
 * @template T - The type to check
 * @returns True if T is a Nullable type, false otherwise
 * @example
 * ```ts
 * type Result = IsNullable<null>
 * // true
 * type Result2 = IsNullable<string>
 * // false
*/
export type IsNullable<T> = null extends T ? true : undefined extends T ? true : false