/**
 *  Json primitive types.
 *  @example
 * ```ts
 * type Result = JsonPrimitives
 * // null | boolean | number | string
 * ```
 */
export type JsonPrimitive = null | boolean | number | string;

/**
 *  Json object type.
 *  @example
 * ```ts
 * type Result = JsonObject
 * // { [key: string]: JsonValue }
 * ```
 */
export type JsonObject = { [key: string]: JsonValue };


/**
 *  Json array type.
 *  @example
 * ```ts
 * type Result = JsonArray
 * // JsonValue[] | readonly JsonValue[]
 * ```
 */
export type JsonArray = JsonValue[] | readonly JsonValue[];


/**
 *  Json value type.
 *  @example
 * ```ts
 * type Result = JsonValue
 * // JsonPrimitive | JsonObject | JsonArray
 * ```
 */
export type JsonValue = JsonPrimitive | JsonObject | JsonArray;