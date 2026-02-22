/**
 * Union of JavaScript primitive value types.
 *
 * @example
 * ```ts
 * type R = Primitive
 * // string | number | boolean | symbol | bigint
 * ```
 */
export type Primitive = string | number | boolean | symbol | bigint;

/**
 *  Nullity primitive types.
 *  @example
 * ```ts
 * type Result = NullityPrimitive
 * // null | undefined
 * ```
 */
export type NullityPrimitive = null | undefined;

/**
 *  Union of all primitive types.
 *  @example
 * ```ts
 * type Result = Primitives
 * // string | number | boolean | symbol | bigint | null | undefined
 * ```
 */
export type Primitives = Primitive | NullityPrimitive;