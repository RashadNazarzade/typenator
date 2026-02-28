/**
 * Cast a type to another type (when A extends B).
 * @param A - The type to cast
 * @param B - The type to cast to
 * @returns The casted type if A extends B, otherwise return B
 *
 * @example
 * ```ts
 * type Result = Cast<string, unknown>
 * // string
 * ```
 */
export type Cast<A, B> = A extends B ? A : B;
