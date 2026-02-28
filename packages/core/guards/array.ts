/**
 * Check if type T is an array.
 * @template T - The type to check
 * @returns True if T is an array, false otherwise
 * @example
 * ```ts
 * type Result = IsArray<string[]>
 * // true
 * type Result2 = IsArray<string>
 * // false
 * ```
 */
export type IsArray<T> = T extends unknown[] ? true : false;

/**
 * Check if type T is a tuple. At least one item is required.
 * [string] is a tuple but string[] is not.
 * @template T - The type to check
 * @returns True if T is a tuple, false otherwise
 * @example
 * ```ts
 * type Result = IsTuple<[string, number]>
 * // true
 * type Result2 = IsTuple<string>
 * // false
 * ```
 */
export type IsTuple<T> = T extends [unknown, ...unknown[]] ? true : false;

/**
 * Check if type T is a readonly array.
 * @template T - The type to check
 * @returns True if T is a readonly array, false otherwise
 * @example
 * ```ts
 * type Result = IsReadonlyArray<readonly string[]>
 * // true
 * type Result2 = IsReadonlyArray<string[]>
 * // false
 * ```
 */
export type IsReadonlyArray<T> = T extends readonly unknown[]
  ? T extends unknown[]
    ? false // mutable array → not readonly
    : true // readonly array
  : false;
