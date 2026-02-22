/**
 * Check if two types are exactly equal (same identity in type system).
 * @template A - The first type
 * @template B - The second type
 * @returns True if A and B are exactly equal, false otherwise
 * @example
 * ```ts
 * type Result = Equals<string, string>
 * // true
 * type Result2 = Equals<string, number>
 * // false
 * ```
 */
export type Equals<A, B> =
  (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? true : false
