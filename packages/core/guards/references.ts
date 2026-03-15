/**
 *  Check is T a any function.
 * @template T - The type to check
 * @returns True if T is a function reference, false otherwise
 * @example
 * ```ts
 * type Result = IsFunctionReference<() => void>
 * // true
 * type Result2 = IsFunctionReference<string>
 * // false
 * ```
 */

export type IsFunction<T> = T extends (...args: any[]) => any ? true : false;


/**
 * Check T is a promise type.
 * @template T - The type to check
 * @returns True if T is a promise reference, false otherwise
 * @example
 * ```ts
 * type Result = IsPromise<Promise<string>>
 * // true
 * type Result2 = IsPromise<string>
 * // false
 * ```
 */
export type IsPromise<T> = T extends Promise<any> ? true : false