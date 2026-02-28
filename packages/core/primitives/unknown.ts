/**
 * Identity for unknown: preserves the type when it is unknown.
 * Useful in conditional type chains.
 * @template T - The type to identity
 * @returns The type itself
 * @example
 * ```ts
 * type Result = UnknownIdentity<unknown>
 * // unknown
 * ```
 */
export type UnknownIdentity<T> = T;
