import type { If } from "../conditionals";
import type { IsNever } from "./primitives";

/**
 * Check if type T is a record.
 * @template T - The type to check
 * @returns True if T is a record, false otherwise
 * @example
 * ```ts
 * type Result = IsRecord<{ name: string, age: number }>
 * // true
 * type Result2 = IsRecord<string>
 * // false
 * ```
 */
export type IsRecord<T> = If<
  IsNever<T>,
  false,
  T extends Record<string, unknown> ? true : false
>;


/**
 * Check if type T is a Empty Record.
 * @template T - The type to check
 * @returns True if T is a Empty Record, false otherwise
 * @example
 * ```ts
 * type Result = IsEmptyRecord<{ name: string, age: number }>
 * // false
 * type Result2 = IsEmptyRecord<{}>
 * // true
 * ```  
 */
export type IsEmptyRecord<T> = If<
  IsNever<T>,
  false,
  T extends Record<string, never> ? true : false
>