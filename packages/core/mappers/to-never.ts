/**
 * Resolve to never when T is not never; otherwise preserve.
 * Useful for filtering out impossible branches.
 *
 * @template T - The type to resolve to never
 * @returns never
 * @example
 * ```ts
 * type Result = ToNever<string>
 * // never
 * ```
 */
export type ToNever<T> = [T] extends [never] ? T : never;
