import type { If } from '../conditionals';

/**
 * Check if type T is never
 * @template T - The type to check
 * @returns True if T is never, false otherwise
 * @example
 * ```ts
 * type Result = IsNever<never>
 * // true
 * type Result2 = IsNever<string>
 * // false
 * ```
*/
export type IsNever<T> = [T] extends [never] ? true : false;


/**
 * Check if type T is a number.
 * @template T - The type to check
 * @returns True if T is a number, false otherwise
 * @exception never type also accepts but it is not a number.
 * @example
 * ```ts
 * type Result = IsNumber<number>
 * // true
 * type Result2 = IsNumber<string>
 * // false
 * ```
 */
export type IsNumber<T> = If<IsNever<T>, false, [T] extends [number] ? true : false>;


/**
 * Check if type T is a string.
 * @template T - The type to check
 * @returns True if T is a string, false otherwise
 * @example
 * ```ts
 * type Result = IsString<string>
 * // true
 * type Result2 = IsString<number>
 * // false
 * ```
 */
export type IsString<T> = If<IsNever<T>, false, [T] extends [string] ? true : false>;

/**
 * Check if type T is a boolean.
 * @template T - The type to check
 * @returns True if T is a boolean, false otherwise
 * @example
 * ```ts
 * type Result = IsBoolean<boolean>
 * // true
 * type Result2 = IsBoolean<string>
 * // false
 * ```
 */
export type IsBoolean<T> = If<IsNever<T>, false, [T] extends [boolean] ? true : false>;


/**
 * Check if type T is a symbol.
 * @template T - The type to check
 * @returns True if T is a symbol, false otherwise
 * @example
 * ```ts
 * type Result = IsSymbol<symbol>
 * // true
 * type Result2 = IsSymbol<string>
 * // false
 * ```
 */
export type IsSymbol<T> = If<IsNever<T>, false, [T] extends [symbol] ? true : false>;

/**
 * Check if type T is a bigint.
 * @template T - The type to check
 * @returns True if T is a bigint, false otherwise
 * @example
 * ```ts
 * type Result = IsBigint<bigint>
 * // true
 * type Result2 = IsBigint<string>
 * // false
 * ```
 */
export type IsBigint<T> = If<IsNever<T>, false, [T] extends [bigint] ? true : false>;


/**
 * Check if type T is a null.
 * @template T - The type to check
 * @returns True if T is a null, false otherwise
 * @example
 * ```ts
 * type Result = IsNull<null>
 * // true
 * type Result2 = IsNull<string>
 * // false
 * ```
 */
export type IsNull<T> = If<IsNever<T>, false, [T] extends [null] ? true : false>;


/**
 * Check if type T is undefined.
 * @template T - The type to check
 * @returns True if T is undefined, false otherwise
 * @example
 * ```ts
 * type Result = IsUndefined<undefined>
 * // true
 * type Result2 = IsUndefined<string>
 * // false
 * ```
 */
export type IsUndefined<T> = If<IsNever<T>, false, [T] extends [undefined] ? true : false>;
