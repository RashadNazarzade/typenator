/**
 * Cast any type to unknown (safe top type).
 * @template T - The type to cast to unknown
 * @returns The type casted to unknown
 * @example
 * ```ts
 * type Result = ToUnknown<string>
 * // unknown
 * ```
 */
export type ToUnknown<T> = unknown extends T ? T : unknown;
