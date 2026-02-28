/**
 * Identity for never: useful in conditional type branches.
 * @param T - The type to identity
 * @returns The type itself
 * @example
 * ```ts
 * type Result = NeverIdentity<never>
 * // never
 * ```
 */
export type NeverIdentity<T> = T;
