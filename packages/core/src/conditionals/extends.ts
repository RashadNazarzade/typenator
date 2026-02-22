/**
 * Check if type A extends type B. Resolves to true or false.
 * @template A - The type to check
 * @template B - The type to check if A extends
 * @returns True if A extends B, false otherwise
 * @example
 * ```ts
 * type Result = Extends<string, unknown>
 * // true
 * type Result2 = Extends<number, string>
 * // false
 * ```
 */
export type Extends<A, B> = A extends B ? true : false
